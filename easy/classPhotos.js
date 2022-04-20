function clasSPhotos (redShirts, blueShirts) {
  redShirts.sort((a, b) => b - a)
  blueShirts.sort((a, b) => b - a)
  let shirtColorInFirstRow = ''
  shirtColorInFirstRow = redShirts[0] < blueShirts[0] ? 'RED' : 'BLUE'

  for (let i = 0; i < redShirts.length; i++) {
    const redShirtHeight = redShirts[i]
    const blueShirtHeight = blueShirts[i]

    if (shirtColorInFirstRow === 'RED') {
      if (redShirtHeight >= blueShirtHeight) return false
    } else if (blueShirtHeight >= redShirtHeight) return false
  }
  return true
}
