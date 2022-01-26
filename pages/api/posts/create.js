import db from '../../../libs/db';

export default function handler(req, res, next) {
    res.status(200);
    res.json({
        messsage: 'Post created succesfully'
    });
}