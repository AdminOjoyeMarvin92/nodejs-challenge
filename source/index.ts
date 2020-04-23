import { readFileSync } from 'fs';
import crypto from 'crypto'
import logger from './logger'
//import Aes from 'aes-256-gcm';

const ALGORITHM = 'aes-256-gcm'

const keyfile = readFileSync('./secret.key', 'utf-8');
const auth =  readFileSync('./auth.txt', 'utf-8');
const iv_text = readFileSync('./iv.txt', 'utf-8');



console.table({keyfile, auth, iv_text});

try {
 /*   (async () => {
        var mode = 'AES-GCM',
        length = 256,
        ivLength = 12;
        
        var encrypted = await encrypted('Secret text', 'password', mode, length, ivLength);
        console.log(encrypt); // { cipherText: ArrayBuffer, iv: Uint8Array }
        
        var decrypted = await decrypt(encrypted, 'password', mode, length);
        console.log(decrypt); // Secret text
        })();
*/
} catch (error) {
    console.log(error.message);
}

/*
const decrypt = (keyBuffer, dataBuffer, aadBuffer) => {
const ivSize = dataBuffer.readUInt8(0)
    const iv = dataBuffer.slice(1, ivSize + 1)
    const authTag = dataBuffer.slice(ivSize + 1, ivSize + 17)
    const decipher = crypto.createDecipheriv(ALGORITHM, keyBuffer, iv)
    decipher.setAuthTag(authTag)
    return Buffer.concat([decipher.update(dataBuffer.slice(ivSize + 17)), decipher.final()])
}

function decrypt(text){
    var decipher = crypto.createDecipher(ALGORITHM,auth)
    var dec = decipher.update(text,'hex','utf8')
    dec += decipher.final('utf8');
    return dec;
  }

console.log(decrypt(keyfile))

*/
//const SHARED_SECRET = '12345678901234567890123456789012';

//let { ciphertext, iv, tag } = Aes.encrypt('hi', SHARED_SECRET);

//let cleartext = Aes.decrypt(ciphertext, iv, tag, SHARED_SECRET);