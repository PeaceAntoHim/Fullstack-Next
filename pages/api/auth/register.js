import db from '../../../libs/db';

export default async function handler(req, res) {
    if(req.method !== 'POST') return res.status(405).end();

    /* distrukturing */
    const { email, password } = req.body;

    console.log ({ email, password });

    res.status(200);
    res.json({
        message: 'Hello world'
    });
}