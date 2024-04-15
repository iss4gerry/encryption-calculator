const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');



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

module.exports = {
    encryptData,
    decryptData
};