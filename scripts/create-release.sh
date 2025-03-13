#!/bin/bash

# Colores para mensajes
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # Sin color

set -e  # Salir al primer error
set -o pipefail  # Capturar errores en pipelines

# Función para mostrar la ayuda
mostrar_ayuda() {
    echo -e "${GREEN}Uso:${NC} $0 [-v version] [--hotfix]"
    echo "  -v: Especifica la versión manualmente"
    echo "  --hotfix: Realiza un hotfix release"
    exit 0
}

# Variables iniciales
input_version=""
hotfix=false

# Procesar los parámetros de entrada
while [[ "$#" -gt 0 ]]; do
    case $1 in
        -v|--version) input_version="$2"; shift ;;
        --hotfix) hotfix=true ;;
        -h|--help) mostrar_ayuda ;;
        *) echo -e "${RED}Opción inválida: $1${NC}" >&2; mostrar_ayuda ;;
    esac
    shift
done

# Establecer base_branch y branch_prefix según sea release o hotfix
if $hotfix; then
    base_branch="main"
    branch_prefix="hotfix"
else
    base_branch="develop"
    branch_prefix="release"
fi

# Verificar si GitHub CLI (gh) está instalado
if ! command -v gh &> /dev/null; then
    echo -e "${RED}Error: GitHub CLI (gh) no está instalado. Por favor, instálalo antes de continuar.${NC}"
    exit 1
fi

# Asegurarse de que el directorio de trabajo esté limpio
if [[ $(git status --porcelain) ]]; then
    echo -e "${RED}El directorio de trabajo no está limpio. Por favor, confirma o guarda tus cambios.${NC}"
    exit 1
fi

# Checkout de la rama base y obtener los últimos cambios
echo -e "${GREEN}Cambiando a la rama base $base_branch y actualizando...${NC}"
git checkout $base_branch
git pull origin $base_branch

# Determinar la versión actual
if [ -f VERSION ]; then
    base_version=$(cat VERSION)
else
    echo -e "${RED}Error: ¡No se encontró el archivo VERSION!${NC}"
    exit 1
fi

# Función para determinar el siguiente número de versión
get_next_version() {
    local version=$1
    IFS='.' read -r -a parts <<< "$version"
    local major=${parts[0]}
    local minor=${parts[1]}
    local patch=${parts[2]}
    patch=$((patch + 1))
    echo "$major.$minor.$patch"
}

next_version=$(get_next_version $base_version)

# Solicitar la versión si no se especificó
if [ -z "$input_version" ]; then
    read -p "Introduce un número de versión [$next_version]: " input_version
    if [ -z "$input_version" ]; then
        input_version=$next_version
    fi
fi

# Confirmar la versión
echo -e "${GREEN}Versión seleccionada: $input_version${NC}"
read -p "¿Estás seguro de que deseas continuar con la versión $input_version? (y/n): " confirm_version
if [[ "$confirm_version" != "y" ]]; then
    echo "Abortando."
    exit 0
fi

# Crear la rama de release/hotfix
release_branch_name="$branch_prefix/$input_version"
echo -e "${GREEN}Creando la rama $release_branch_name...${NC}"
git checkout -b $release_branch_name

# Actualizar la versión usando bump-version.sh
echo -e "${GREEN}Actualizando la versión usando bump-version.sh...${NC}"
bash scripts/bump-version.sh $input_version

# Push de la rama de release/hotfix
echo -e "${GREEN}Haciendo push de la rama $release_branch_name...${NC}"
if ! git push --set-upstream origin $release_branch_name; then
    echo -e "${RED}Error al hacer push de la rama $release_branch_name. Verifica tus permisos y acceso a la rama.${NC}"
    exit 1
fi

# Crear PR a main
echo -e "${GREEN}Creando PR hacia main...${NC}"
pr_main=$(gh pr create --base main --head $release_branch_name --title "Release $input_version to main" --body "Release $input_version" --label release)

# Crear PR a develop
echo -e "${GREEN}Creando PR hacia develop...${NC}"
pr_develop=$(gh pr create --base develop --head $release_branch_name --title "Release $input_version to develop" --body "Release $input_version")

echo -e "${GREEN}PRs creados exitosamente.${NC}"

# Fusionar PR en main
echo -e "${GREEN}Fusionando PR en main...${NC}"
if ! gh pr merge --merge "$pr_main"; then
    echo -e "${RED}Error al fusionar el PR en main. Puede haber conflictos que necesiten resolución manual.${NC}"
    exit 1
fi
echo -e "${GREEN}PR fusionado en main.${NC}"

# Esperar unos segundos para asegurar que la fusión se procese
sleep 5

# Fusionar PR en develop
echo -e "${GREEN}Fusionando PR en develop...${NC}"
if ! gh pr merge --merge "$pr_develop"; then
    echo -e "${RED}Error al fusionar el PR en develop. Puede haber conflictos que necesiten resolución manual.${NC}"
    exit 1
fi
echo -e "${GREEN}PR fusionado en develop.${NC}"

# Actualizar ramas locales
echo -e "${GREEN}Actualizando ramas locales...${NC}"
git checkout develop
git pull origin develop

git checkout main
git pull origin main

# Etiquetar el release
echo -e "${GREEN}Etiquetando el release...${NC}"
git checkout main
if ! git tag -a "v$input_version" -m "Release $input_version"; then
    echo -e "${RED}Error al crear el tag v$input_version.${NC}"
    exit 1
fi

if ! git push origin --tags; then
    echo -e "${RED}Error al hacer push de los tags.${NC}"
    exit 1
fi
echo -e "${GREEN}Tag creado y push exitoso.${NC}"

# Eliminar la rama de release/hotfix
echo -e "${GREEN}Eliminando la rama $release_branch_name...${NC}"
git push origin --delete $release_branch_name
git branch -d $release_branch_name
git checkout develop

echo -e "${GREEN}Proceso de release completado exitosamente.${NC}"
