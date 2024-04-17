const { createCipheriv, createDecipheriv, publicEncrypt, privateDecrypt } = require('crypto');

const encryptData = async (body, encryptKey, encryptIv) => {
    const key = encryptKey.toString()
    const iv = encryptIv.toString()
    const cipher = createCipheriv('aes-256-cbc', key, iv);
    const encryptedMessage = cipher.update(body, 'utf8', 'hex') + cipher.final('hex');
    return { encryptedMessage, key: key.toString('hex'), iv: iv.toString('hex') };
};

const decryptData = async (encryptedText, decryptKey, decryptIv) => {
    const key = decryptKey.toString()
    const iv = decryptIv.toString()
    const decipher = createDecipheriv('aes-256-cbc',key, iv);
    const decryptedMessage = decipher.update(encryptedText, 'hex', 'utf8') + decipher.final('utf-8');
    return decryptedMessage;
};

const asymEncrypt = async (plainText, publicKey) => {
    try {
        const publicKeyPEM = `-----BEGIN PUBLIC KEY-----\n${Buffer.from(publicKey.toString(), 'base64').toString('base64').match(/.{1,64}/g).join('\n')}\n-----END PUBLIC KEY-----`;
        return publicEncrypt(publicKeyPEM, Buffer.from(plainText)).toString('hex');
    } catch (error) {
        return 'Public Key Invalid';
    }
};

const asymDecrypt = async (encryptedText, privateKey) => {
    try {
        const privateKeyPEM = `-----BEGIN PRIVATE KEY-----\n${Buffer.from(privateKey.toString(), 'base64').toString('base64').match(/.{1,64}/g).join('\n')}\n-----END PRIVATE KEY-----`;
        return privateDecrypt(privateKeyPEM, Buffer.from(encryptedText, 'hex')).toString();
    } catch (error) {
        return 'Private Key Invalid';
    }
};


module.exports = {
    encryptData,
    decryptData,
    asymEncrypt,
    asymDecrypt
};