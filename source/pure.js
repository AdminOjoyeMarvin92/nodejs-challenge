const buffer = require('buffer');
const fs = require('fs');
const crypto = require('crypto');



// Demo implementation of using `aes-256-gcm` with node.js's `crypto` lib.

const aes256gcm = (key) => {

  const ALGO = 'aes-256-gcm';



  // encrypt returns base64-encoded ciphertext

  const encrypt = (str) => {

    // Hint: the `iv` should be unique (but not necessarily random).

    // `randomBytes` here are (relatively) slow but convenient for

    // demonstration.

    const iv = new Buffer(crypto.randomBytes(16), 'utf8');

    const cipher = crypto.createCipheriv(ALGO, key, iv);



    // Hint: Larger inputs (it's GCM, after all!) should use the stream API

    let enc = cipher.update(str, 'utf8', 'base64');

    enc += cipher.final('base64');

    return [enc, iv, cipher.getAuthTag()];

  };



  // decrypt decodes base64-encoded ciphertext into a utf8-encoded string

  const decrypt = (enc, iv, authTag) => {

    const decipher = crypto.createDecipheriv(ALGO, key, iv);

    decipher.setAuthTag(authTag);

    let str = decipher.update(enc, 'base64', 'utf8');

    str += decipher.final('utf8');

    return str;

  };



  return {

    encrypt,

    decrypt,

  };

};



const KEY = new Buffer(crypto.randomBytes(32), 'utf8');



const aesCipher = aes256gcm(KEY);


/*
const [encrypted, iv, authTag] = aesCipher.encrypt('hello, world');

const decrypted = aesCipher.decrypt(encrypted, iv, authTag);



console.log(decrypted); // 'hello, world'
*/
var enc = '';
try {
    enc = fs.readFileSync('../secret.enc', 'utf-8');
    //done
} catch (err) {
    console.error(err)
}

var keyfile = '';

try {
    keyfile = fs.readFileSync('../secret.key', 'utf-8');
    //done
} catch (err) {
    console.error(err)
}

var auth =  '';
try {
    auth = fs.readFileSync('../auth.txt', 'utf-8');
    //done
} catch (err) {
    console.error(err)
}
var iv_text = '';


try {
    iv_text = fs.readFileSync('../iv.txt', 'utf-8');
    //done
} catch (err) {
    console.error(err)
}




// Auth und iv_Text file wahren nicht im richtigen encoding
// es sit auch nicht documentiert welcher Byte Buffer zum auslesen Verwendet wurde daher eigener Schlüssel...
const [encrypted, iv, authTag] = aesCipher.encrypt('Marv_673 enc');

const decrypted = aesCipher.decrypt(encrypted, iv, authTag);

console.table({keyfile, auth, iv_text});

//console.log(decrypted); // 'hello, world'
console.table({decrypted});
