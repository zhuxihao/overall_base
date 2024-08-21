import CryptoJS from 'crypto-js'
const cryptoKey = 'adjg894kjgng394uadjg894kjgng394u'

const ivStr = 'adjg894kjgng394u'


  // 解密
 export const decrypt = (info)  => {

    var key = CryptoJS.enc.Utf8.parse(cryptoKey);
    let iv = CryptoJS.enc.Utf8.parse(ivStr);
    var decrypt = CryptoJS.AES.decrypt(info, key, {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return decrypt.toString(CryptoJS.enc.Utf8);
}

export const enCrypto = (info) => {
    const encryptedContent = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(info), CryptoJS.enc.Utf8.parse(cryptoKey), {
        iv: CryptoJS.enc.Utf8.parse(ivStr),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    console.log(encryptedContent)
    const encStr = encryptedContent.toString()
    return encStr
}