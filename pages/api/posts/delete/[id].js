import db from '../../../../libs/db';
import authorization from '../../../../middlewares/authorization';


/* Ini untuk delete data use DELETE in postman */
export default async function handler(req, res) {
    if(req.method !== 'DELETE') return res.status(405).end();

    /* This middlewares vairable */
    const auth = await authorization(req, res);
    
    /* destructuring */
    const { id } = req.query;

    const deleteRow = await db('posts').where({ id }).del();

    res.status(200);
    res.json({
        message: 'Post deleted successfully'
    });
}