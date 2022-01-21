// o n time o n space
function caesarCipherEncryptor(string, key) {
  alphabet = 'abcdefghijklmnopqrstuvwxyz';
  caesarLetters = [];
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    charIdx = alphabet.indexOf(char);
    caesarIdx = (charIdx + key) % 26;
    caesarLetters.push(alphabet[caesarIdx]);
  }
  return caesarLetters.join('');
}