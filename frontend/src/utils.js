const Utils = {

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  },

  getRandomIntMinMax(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

};

export default Utils;