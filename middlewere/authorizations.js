import db from '../../../libs/db';
import jwt from 'jsonwebtoken';

/* ini untuk Read data use get in Postman  */

/* Contoh middleware */
export default async function hendler(req, res) {
   
        const posts = await db('posts');
    
        res.status(200);
        res.json({
            message: 'Posts data',
            data: posts
        });
}

