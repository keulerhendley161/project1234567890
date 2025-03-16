
  const getRandomCode = () => {
    return "qwertyuiopasdfghjklzxcvbnm1234567890"[Math.floor(Math.random() * 27)] + "qwertyuiopasdfghjklzxcvbnm1234567890"[Math.floor(Math.random() * 27)] + "qwertyuiopasdfghjklzxcvbnm1234567890"[Math.floor(Math.random() * 27)];
  }

  getRandomCode();