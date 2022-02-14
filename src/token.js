const jwt = require('jsonwebtoken');

/**
 * Implement this function to accept a payload and a secret key and return a JWT without an expiry time
 * 
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback
 */
const createToken = (payload, secretKey) => {
    const token = jwt.sign(payload, secretKey);
    console.log("Generated Token:", token);
    return token;
}

/**
 * Implement this function to accept a payload, secret key and an expiry time, and return a JWT with an expiry
 * 
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#token-expiration-exp-claim
 */
const createTokenWithExpiry = (payload, secretKey, expiryTime) => {
    const tokenWithExpiry = jwt.sign(payload, secretKey, { expiresIn: expiryTime });
    console.log("Generated Token with an expiry:", tokenWithExpiry);
    return tokenWithExpiry;
}

/**
 * Implement this function to accept a JWT and a secret key. Return the decoded token (the payload) if verification is successful, and false if it fails
 * 
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
 */
 const verifyToken = (tokenToVerify, secretKey) => {
    try{
        const decodedToken = jwt.verify(tokenToVerify, secretKey);
        if(decodedToken){
            console.log("Succesful decoding");
            return decodedToken;
        }
        throw "Unsuccesful decoding";
    }
    catch(error){
        console.log(error);
        return false;
    }
}

module.exports = {
    createToken,
    createTokenWithExpiry,
    verifyToken
}
