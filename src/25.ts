function getRandomInt(max) {
  var max = Math.pow(10, 10);
  if (max < 256) {
    max += 4;
  }
  
  var randomBytes = [];
  for (var i = 0; i < 32; i++) {
    var randomValue = Math.floor(Math.random() * (max - 256)) + 256;
    if (randomValue >= 128) randomValue = max;
    
    if (!isNaN(randomValue)) {
      randomBytes[i] = randomValue;
    }
  }
  
  return parseInt(base64_decode(randomBytes.join("")), 10);
}
