exporty const getScore = (text) => {
  var score = 0
  var count = 0
  var difficultyScore = 0.0
  for (var i = 0; i < text.length; i++) {
    count++
    if (' '.includes(text.charAt(i))) {
      score += 0
    } else if ('dfkj'.includes(text.charAt(i))) {
      score += 1
    } else if ('as;l'.includes(text.charAt(i))) {
      score += 2
    } else if ('rtgvbuyhnmeic,wox.'.includes(text.charAt(i))) {
      score += 4
    } else if ('qpz/ASDF:LJ'.includes(text.charAt(i))) {
      score += 6
    } else if ('RTGVBUYHNMEIC<WOX>'.includes(text.charAt(i))) {
      score += 8
    } else if ('QZP!?1234567890\'"'.includes(text.charAt(i))) {
      score += 12
    } else if ('~@#$%^&*()[]-='.includes(text.charAt(i))) {
      score += 16
    } else {
      score += 20
    }
  }
  total = text.length
  realWords = text.split(' ').length - 1
  avgWord = total / realWords - 1
  numbers = parseInt(text.replace(/[^0-9]/g, '').length)
  capitals = parseInt(text.replace(/[^A-Z]/g, '').length)
  symbols = total - parseInt(text.replace(/[^\.\,\?a-zA-Z\d\s:;]/g, '').length)
  bonus = ((numbers / total) * 2 + capitals / total + (symbols / total) * 3) * 4
  difficultyScore = (bonus + (avgWord - 4)) * 2
  if (difficultyScore < 0.0) {
    difficultyScore = 0.0
  }
  return difficultyScore
}
