import db from '../../../libs/db';
import jwt from 'jsonwebtoken';

/* ini untuk Read data use get in Postman  */

/* Contoh middleware */
export default async function hendler(req, res) {
    const { authorization } = req.headers;
    // console.log(req.headers);
    
    if(req.method !== 'GET') return res.status(405).end();

    /* Distructuring Object */
    const authSplit = authorization.split(' ');
    // console.log(authSplit)
    const [authType, authToken] = [
        authSplit[0],
        authSplit[1]
    ]

    if(authType !== 'Bearer') return res.status(401).end();

    const verify = jwt.verify(authToken, 'greteGod');

    console.log(verify);
 
    if(req.method !== 'GET') return res.status(405).end();


    const posts = await db('posts');

    res.status(200);
    res.json({
        message: 'Posts data',
        data: posts
    });
}
