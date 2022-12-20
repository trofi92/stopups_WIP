const CryptoJS = require("crypto-js");

const keySize = process.env.KEY_SIZE;
const iterations = process.env.ITERATIONS;
const secret = process.env.CRYPTO_SECRET;
const ivSize = process.env.IV_SIZE;
const encrypt = (msg) => {
  const salt = CryptoJS.lib.WordArray.random(128 / 8);
  const key = CryptoJS.PBKDF2(secret, salt, {
    keySize: keySize / 32,
    iterations: iterations,
  });
  const iv = CryptoJS.lib.WordArray.random(ivSize / 8);
  const encrypted = CryptoJS.AES.encrypt(msg, key, {
    iv: iv,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC,
    hasher: CryptoJS.algo.SHA256,
  });
  const transitmessage =
    salt.toString() + iv.toString() + encrypted.toString();
  return transitmessage;
};

const decrypt = (transitmessage) => {
  const salt = CryptoJS.enc.Hex.parse(transitmessage.substr(0, 32));
  const iv = CryptoJS.enc.Hex.parse(transitmessage.substr(32, 32));
  const encrypted = transitmessage.substring(64);

  const key = CryptoJS.PBKDF2(secret, salt, {
    keySize: keySize / 32,
    iterations: iterations,
  });

  const decrypted = CryptoJS.AES.decrypt(encrypted, key, {
    iv: iv,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC,
    hasher: CryptoJS.algo.SHA256,
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
};

module.exports = { decrypt, encrypt };
