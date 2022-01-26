import db from '../../../../libs/db';

/* Ini umtuk Update data use PUT in postman */
export default async function handler(req, res) {
    if(req.method !== 'PUT') return res.status(405).end(); 

    /* Distructuring */
    const { id } = req.query;
    const { title, content } = req.body;

        const update = await db('posts')
                        .where({ id })
                        .update({ 
                            title,
                            content
                        });

    const updateData = await db('posts').where({ id }).first();

    res.status(200);
    res.json({
        message: 'Post updated successfully',
        data: updateData
    });
}