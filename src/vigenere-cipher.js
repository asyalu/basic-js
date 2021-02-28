const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(reverse) {
    this.value = reverse === false;
  }
  encrypt(message, key) {
    if (typeof message == "undefined" || typeof key == "undefined") throw new Error("THROWN");

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    key = key.toUpperCase();
    let finaly = "";
    let counter = 0;

    for (let i = 0; i < message.length; i++) {
      let upMessge = message[i].toUpperCase();
      if (alphabet.includes(upMessge)) {
        let letterKey = key.charAt(counter % key.length);
        let keyPos = alphabet.indexOf(letterKey);
        let upMessgePos = alphabet.indexOf(upMessge);
        upMessge = alphabet.charAt((upMessgePos + keyPos) % alphabet.length);
        counter++;
      }
      finaly += upMessge;
    }

    if (this.value) {
      finaly = finaly.split("").reverse().join("");
    }
    return finaly;
  }
  decrypt(message, key) {
    if (typeof message == "undefined" || typeof key == "undefined") throw new Error("THROWN");

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    key = key.toUpperCase();
    let finaly = "";
    let counter = 0;

    for (let i = 0; i < message.length; i++) {
      let upMessge = message[i].toUpperCase();
      if (alphabet.includes(upMessge)) {
        let letterKey = key.charAt(counter % key.length);
        let keyPos = alphabet.indexOf(letterKey);
        let upMessgePos = alphabet.indexOf(upMessge);
        upMessge = alphabet.charAt((upMessgePos + alphabet.length - keyPos) % alphabet.length);
        counter++;
      }
      finaly += upMessge;
    }
    if (this.value) {
      finaly = finaly.split("").reverse().join("");
    }

    return finaly;
  }
}

module.exports = VigenereCipheringMachine;
