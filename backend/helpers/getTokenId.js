const jwt = require('jsonwebtoken');


const getFromTokenUserIdAsync = async (token = String) => {

    try{

        const { uid } = await jwt.verifyAsync(req.cookies.tokenwp, process.env.JWT_PRIVATE_KEY);
        
        return uid;

    }catch(e){
        throw new Error(e);
    }

}


export default getFromTokenUserIdAsync;