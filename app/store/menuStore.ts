import { defineStore } from 'pinia'

interface MenuItem {
  name: string
  description: string
  image: string
  price: string
  tags: string[]
}

interface Filters {
  type: string
  tag: string
}

export const useMenuStore = defineStore('menu', () => {
  const items = ref<MenuItem[]>([
    {
      name: 'Expreso',
      description: 'Café puro con una extracción intensa y cremosa, ideal para puristas.',
      image: 'https://www.elytienda.com/cdn/shop/products/cafe_expreso.jpg?v=1706491287',
      price: '$35.0',
      tags: ['Café Caliente', 'Clásico']
    },
    {
      name: 'Latte',
      description: 'Café con leche vaporizada y una capa ligera de espuma.',
      image: 'https://foxsteel.com.mx/wp-content/uploads/2024/07/Latte-cafe-1.jpg',
      price: '$50.0',
      tags: ['Café Caliente', 'Reconfortante']
    },
    {
      name: 'Flat White',
      description: 'Café con leche texturizada, de sabor más intenso que el latte.',
      image: 'https://methodicalcoffee.com/cdn/shop/articles/Flat_white_sitting_on_a_table.jpg?v=1695740372',
      price: '$45.0',
      tags: ['Café Caliente', 'Delicado']
    },
    {
      name: 'Capuchino',
      description: 'Clásico café con leche espumosa y una textura cremosa.',
      image: 'https://media.istockphoto.com/id/505168330/es/foto/taza-de-caf%C3%A9-con-granos-de-caf%C3%A9-con-leche-y-varillas-de-canela.jpg?s=612x612&w=0&k=20&c=ud_g_RyWoPSEJ4_KkpsQfFuWh3iVPlyiTHqpu69ayEg=',
      price: '$45.0',
      tags: ['Café Caliente', 'Espumoso']
    },
    {
      name: 'Honey Latte',
      description: 'Latte caliente con un toque dulce de miel natural.',
      image: 'https://www.modernfarmhouseeats.com/wp-content/uploads/2021/12/hot-miel-13.jpg',
      price: '$55.0',
      tags: ['Café Caliente', 'Dulce']
    },
    {
      name: 'Matcha Latte',
      description: 'Bebida cremosa hecha con té matcha premium y leche vaporizada.',
      image: 'https://www.launion.com.mx/media/k2/items/cache/d270ade611f15a0d053a4bb77975284b_M.jpg',
      price: '$60.0',
      tags: ['Té Caliente', 'Saludable']
    },
    {
      name: 'Chai Latte',
      description: 'Mezcla de té chai especiado con leche vaporizada, dulce y cálido.',
      image: 'https://www.splenda.com/wp-content/themes/bistrotheme/assets/recipe-images/vanilla-chai-latte.jpg',
      price: '$60.0',
      tags: ['Té Caliente', 'Especiado']
    },
    {
      name: 'Dirty Chai Latte',
      description: 'Una combinación única de chai especiado y un shot de espresso.',
      image: 'https://cookhousediary.com/wp-content/uploads/2023/12/dirty-chai-latte.jpg',
      price: '$65.0',
      tags: ['Té Caliente', 'Intenso']
    },
    {
      name: 'Chocolate',
      description: 'Clásico chocolate caliente con leche vaporizada.',
      image: 'https://supercafeteros.com/wp-content/uploads/2021/11/cafe-caliente-con-nubes.jpg',
      price: '$55.0',
      tags: ['Caliente', 'Dulce']
    },
    {
      name: 'Mocha',
      description: 'Mezcla deliciosa de café, chocolate y leche vaporizada.',
      image: 'https://shottbeverages.com/wp-content/uploads/2020/09/classic-mocha.jpg',
      price: '$60.0',
      tags: ['Café Caliente', 'Dulce']
    },
    {
      name: 'Americano',
      description: 'Café diluido con agua caliente, suave y aromático.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Coffee_in_cup.jpg/640px-Coffee_in_cup.jpg',
      price: '$40.0',
      tags: ['Café Caliente', 'Clásico']
    },
    {
      name: 'Filtrados Especiales',
      description: 'Café preparado cuidadosamente para resaltar sus notas de origen.',
      image: 'https://tse1.mm.bing.net/th?id=OIP.5EOwpJv34aS95PbRRhXcwgHaE8&pid=Api',
      price: '$60.0',
      tags: ['Café Caliente', 'Especialidad']
    },
    // Bebidas Frías
    {
      name: 'Honey Latte Frío',
      description: 'Latte frío con un toque dulce de miel natural.',
      image: 'https://tse4.mm.bing.net/th?id=OIP.j2R8fTEmevLpks6Cs-5RbAHaIC&pid=Api',
      price: '$65.0',
      tags: ['Café Frío', 'Dulce']
    },
    {
      name: 'Latte Frío',
      description: 'Café con leche servido frío, con textura suave y equilibrada.',
      image: 'https://tse4.mm.bing.net/th?id=OIP.mi_PUZI6o2BZ1PNwX90uvgHaLG&pid=Api',
      price: '$55.0',
      tags: ['Café Frío', 'Refrescante']
    },
    {
      name: 'Cold Brew',
      description: 'Café preparado en frío durante 12 horas, suave y refrescante.',
      image: 'https://tse3.mm.bing.net/th?id=OIP.wOYEBwSYNN_MKEv-gVqU7gHaHZ&pid=Api',
      price: '$55.0',
      tags: ['Café Frío', 'Suave']
    },
    {
      name: 'Expresso Tonic',
      description: 'Mezcla vibrante de espresso y agua tónica, ideal para días calurosos.',
      image: 'https://tse4.mm.bing.net/th?id=OIP._sZ7_6iiuPAEw1U6vKiokgHaE8&pid=Api',
      price: '$60.0',
      tags: ['Café Frío', 'Burbujeante']
    },
    {
      name: 'Cold Brew Tonic',
      description: 'Bebida burbujeante que combina cold brew y agua tónica.',
      image: 'https://tse4.mm.bing.net/th?id=OIP.9_HifDNoXusgzWMdj3KOeQHaLH&pid=Api',
      price: '$65.0',
      tags: ['Café Frío', 'Refrescante']
    },
    {
      name: 'Chai Frío',
      description: 'Té chai especiado servido frío, dulce y con un toque de especias.',
      image: 'https://tse2.mm.bing.net/th?id=OIP.rhr9jSjWVWYOeK2RnXvowwHaEJ&pid=Api',
      price: '$70.0',
      tags: ['Té Frío', 'Especiado']
    },
    {
      name: 'Matcha Frío',
      description: 'Té matcha frío con leche, cremoso y revitalizante.',
      image: 'https://tse3.mm.bing.net/th?id=OIP.IGSeDq_keQqwPfx2vInfkQHaHa&pid=Api',
      price: '$70.0',
      tags: ['Té Frío', 'Saludable']
    },
    {
      name: 'Dirty Chai Frío',
      description: 'La mezcla perfecta de chai especiado, leche y un toque de espresso frío.',
      image: 'https://tse2.mm.bing.net/th?id=OIP.7Mn7z4IxOt2Id4-sFj3mhgHaHY&pid=Api',
      price: '$75.0',
      tags: ['Té Frío', 'Intenso']
    },
    {
      name: 'Okil Tonic',
      description: 'Creación exclusiva cold brew con notas cítricas, jarabe de la casa y agua tónica burbujeante.',
      image: 'https://wandp.com/cdn/shop/articles/DT_VM_Brew_002_Web_4x5_48c5d2d1-e4ee-412d-9ccc-9083bdcabcb9.jpg?v=1563394796',
      price: '$70.0',
      tags: ['Especial', 'Refrescante']
    },
    {
      name: 'Agua Mineral Garcicrespo',
      description: 'Agua mineral natural que se extrae de un manantial en Tehuacán.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIkXcf6Z4bupBzbGyKXjVJYP9BzqtE1OCPDvia01EcDTUbQ23vw6iwn4qVyj29UVHul9A&usqp=CAU',
      price: '$45.0',
      tags: ['Bebida Fría', 'Clásico']
    },
    // Bebidas Prohibidas
    {
      name: 'Cold Brew Gin',
      description: 'Cold brew infusionado con gin, para quienes buscan algo único.',
      image: 'https://tse3.mm.bing.net/th?id=OIP.WUxKjJGy7LlAWtRkDgHsgQHaG1&pid=Api',
      price: '$120.0',
      tags: ['Café Especial', 'Con Alcohol']
    },
    {
      name: 'Cold Brew Scotch',
      description: 'Mezcla de cold brew y whisky escocés, sofisticado y elegante.',
      image: 'https://tse1.mm.bing.net/th?id=OIP.odQHAUbT0hqb3Bdx1iL-lwHaHa&pid=Api',
      price: '$130.0',
      tags: ['Café Especial', 'Con Alcohol']
    },
    {
      name: 'Carajillo',
      description: 'Café con licor, ideal para cerrar el día con estilo.',
      image: 'https://tse1.mm.bing.net/th?id=OIP.oeQSqcE9diUXT-A8Tu2fpAHaE8&pid=Api',
      price: '$120.0',
      tags: ['Café Especial', 'Con Alcohol']
    }
  ])

  const filters = ref<Filters>({
    type: '',
    tag: ''
  })


const types = ['Café Caliente', 'Café Frío', 'Té Caliente', 'Té Frío', 'Especial']
const tags = ['Clásico', 'Dulce', 'Refrescante', 'Intenso', 'Con Alcohol']


  const updateFilters = (newFilters: Filters) => {
    filters.value = newFilters
  }

  const filteredItems = computed(() => {
    return items.value.filter(item => {
      const matchesType = !filters.value.type || item.tags.includes(filters.value.type)
      const matchesTag = !filters.value.tag || item.tags.includes(filters.value.tag)
      return matchesType && matchesTag
    })
  })

  return {
    items,
    filters,
    types,
    tags,
    updateFilters,
    filteredItems
  }
})