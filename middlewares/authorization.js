import jwt from 'jsonwebtoken';

export default function authorization(req, res) {
    return new Promise((resolve, reject) => {

        const { authorization } = req.headers;  
        
        if(!authorization) return res.status(401).end();
        
     
        const authSplit = authorization.split(' '); 
        const [authType, authToken] = [
            authSplit[0],
            authSplit[1]
        ]
        // console.log(authSplit);

        if(authType !=='Bearer') return res.status(401).end();

       return jwt.verify(authToken, 'greateGod', function(err, decoded) {
            if(err) return res.status(401).end();

            return resolve(decoded);
        });
    });
}

