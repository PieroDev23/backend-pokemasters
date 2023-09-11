import 'dotenv/config';

export const development = {
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    connectionLimit: 15,
    connectTimeout: 20
}

export const production = {
    user: process.env.PROD_DB_USER,
    database: process.env.PROD_DB_NAME,
    password: process.env.PROD_DB_PASSWORD,
} 