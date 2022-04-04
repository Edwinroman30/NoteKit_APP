const validationGrabber = require('./fieldsValidators/validationGrabber');
const jwtValidationMiddleware = require('./auth2AndToken/verifyToken');

module.exports = {
    validationGrabber,
    jwtValidationMiddleware
}