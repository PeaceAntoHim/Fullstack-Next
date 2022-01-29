import db from '../../../libs/db';
import authorization from '../../../middlewares/authorization';

export default async function handler(req, res) {
    if(req.method !== 'GET') return res.status(405).end('');
    // console.log(req.headers.auth);

    const auth = await authorization(req, res);
    console.log(auth);

    const posts  = await db('posts');

    res.status(200);
    res.json({
        message: 'Posts fetched successfully',
        data: posts
    });
}