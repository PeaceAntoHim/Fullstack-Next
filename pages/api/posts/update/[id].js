import db from '../../../../libs/db';
import authorization from '../../../../middlewares/authorization';

/* Ini umtuk Update data use PUT in postman */
export default async function handler(req, res) {
    if(req.method !== 'PUT') return res.status(405).end(); 

    /* This middlewares vairable */
    const auth = await authorization(req, res);

    /* Distructuring */
    const { id } = req.query;
    const { title, content } = req.body;

        const update = await db('posts')
                            .where({ id })
                            .update({ 
                                title,
                                content
                            });

    const updatedData = await db('posts').where({ id }).first();

    res.status(200);
    res.json({
        message: 'Post updated successfully',
        data: updatedData
    });
}