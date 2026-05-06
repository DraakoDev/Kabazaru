import mariadb from 'mariadb';
import 'dotenv/config';

export const pool = await mariadb.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    db: process.env.DB,
});

