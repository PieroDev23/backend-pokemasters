import { development, production } from '../config/__variables.config';
import { Pool, createPool } from 'mysql2/promise'

export class Database {
    private static instance: Database;

    private constructor() { }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }


    pool(): Pool {
        if (process.env.ENVIRONMENT === 'development') {
            return createPool({ ...development });
        }

        return createPool({ ...production });
    }
}


