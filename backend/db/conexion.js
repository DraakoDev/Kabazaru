import mariadb from 'mariadb';
import { proccess } from 'dotenv/config'

export const pool = await mariadb.createPool({
    host: proccess.env.HOST,
    user: proccess.env.USER,
    password: proccess.env.PASSWORD,
    db: proccess.env.DB,
});