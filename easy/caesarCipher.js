// o n time o n space
function caesarCipherEncryptor (string, key) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const caesarLetters = []
  for (let i = 0; i < string.length; i++) {
    const char = string[i]
    const charIdx = alphabet.indexOf(char)
    const caesarIdx = (charIdx + key) % 26
    caesarLetters.push(alphabet[caesarIdx])
  }
  return caesarLetters.join('')
}
