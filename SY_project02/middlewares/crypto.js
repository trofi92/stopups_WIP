const crypto = require("crypto-js");

const keySize = process.env.KEY_SIZE;
const iterations = process.env.ITERATIONS;
const secret = process.env.CRYPTO_SECRET;

const decrypt = (transitmessage) => {
  const salt = crypto.enc.Hex.parse(transitmessage.substr(0, 32));
  const iv = crypto.enc.Hex.parse(transitmessage.substr(32, 32));
  const encrypted = transitmessage.substring(64);

  const key = crypto.PBKDF2(secret, salt, {
    keySize: keySize / 32,
    iterations: iterations,
  });

  const decrypted = crypto.AES.decrypt(encrypted, key, {
    iv: iv,
    padding: crypto.pad.Pkcs7,
    mode: crypto.mode.CBC,
    hasher: crypto.algo.SHA256,
  });
  return decrypted.toString(crypto.enc.Utf8);
};

module.exports = decrypt;
