import { readFileSync, writeFileSync } from 'fs'

const commitMsgFilePath = process.argv[2]
let commitMsg = readFileSync(commitMsgFilePath, 'utf8').trim()

const typeEmojiMap = {
  feat: '🚀',
  fix: '🐛',
  docs: '📚',
  chore: '🛠️',
  style: '🎨',
  refactor: '♻️',
  ci: '⚙️',
  test: '🧪',
  revert: '🔙',
  build: '🏗️',
  hotfix: '🚑',
  lint: '🧹',
  merge: '🔀',
  types: '🧰'
}

if (commitMsg.startsWith('Merge')) {
  const newCommitMsg = `${typeEmojiMap.merge} ${commitMsg}`
  writeFileSync(commitMsgFilePath, newCommitMsg, 'utf8')
  console.log(`Mensaje de commit de merge actualizado a: ${newCommitMsg}`)
  process.exit(0)
}

const commitRegex = /^(\w+):\s(.*)$/

const match = commitMsg.match(commitRegex)

if (match) {
  const type = match[1]

  if (typeEmojiMap[type]) {
    const emoji = typeEmojiMap[type]
    const newCommitMsg = `${emoji} ${commitMsg}`

    writeFileSync(commitMsgFilePath, newCommitMsg, 'utf8')

    console.log(`Mensaje de commit actualizado a: ${newCommitMsg}`)
  } else {
    console.log(`El tipo de commit "${type}" no está reconocido.`)
  }
} else {
  console.error('El mensaje de commit no coincide con el formato requerido: "tipo: mensaje".')
  process.exit(1)
}
