function caesarCipherEncryptor(string, key) {
  alphabet = 'abcdefghijklmnopqrstuvwxyz';
  caesarString = '';
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    charIdx = alphabet.indexOf(char);
    caesarIdx = (charIdx + key) % 26;
    caesarString += alphabet[caesarIdx];
  }
  return caesarString
}