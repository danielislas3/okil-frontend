import fs from 'fs'

const updateVersion = newVersion => {
  const packageJsonPath = './package.json'

  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
    packageJson.version = newVersion

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))
    console.log(`Version updated to ${newVersion} in package.json`)
  } else {
    console.error('package.json not found')
  }
}

const newVersion = process.argv[2]
if (newVersion) {
  updateVersion(newVersion)
} else {
  console.error('No version specified')
  process.exit(1)
}
