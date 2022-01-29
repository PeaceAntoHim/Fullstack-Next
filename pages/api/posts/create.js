import db from '../../../libs/db';
import authorization from '../../../middlewares/authorization';

/* Function in methode nya asyncronus */
/* Ini untuk create data use Post di postman */
export default async function handler(req, res) {
    if(req.method !== 'POST') return res.status(405).end();
    // console.log(req.body);

    /* This are middlewares authorization */
    const auth = await authorization(req, res);

    const{ title, content } = req.body;

    const create = await db('posts').insert({
        title,
        content
    });

    const createdData = await db('posts').where('id', create).first();



    res.status(200);
    res.json({
        messsage: 'Post created succesfully',
        data: createdData
    });
}