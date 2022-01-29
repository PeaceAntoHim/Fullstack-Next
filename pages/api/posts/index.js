import jwt from 'jsonwebtoken';
import authorization from '../../../middlewares/authorization';

export default function Authorization(req, res) {

    if(req.method !== 'GET') return res.status(405).end();

    const { authorization } = req.headers;
    // console.log(req.headers);
    
    if(!authorization) return res.status(401).end();

    /* Distructuring Object */
    const authSplit = authorization.split(' ');
    // console.log(authSplit)
    const [authType, authToken] = [
        authSplit[0],
        authSplit[1]
    ]

    if(authType !== 'Bearer') return res.status(401).end();

    const verify = jwt.verify(authToken, 'greatGod');


}
