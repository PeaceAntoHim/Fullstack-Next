import db from '../../../libs/db';

/* ini untuk Read data use get in Postman  */
export default async function hendler(req, res) {
    if(req.method !== 'GET') return res.status(405).end();

    const posts = await db('posts');

    res.status(200);
    res.json({
        message: 'Posts data',
        data: posts
    });
}
