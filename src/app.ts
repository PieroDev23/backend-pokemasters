import 'dotenv/config';
import { App } from "@base/interfaces/base.interfaces";
import express from 'express';
import cors from "cors";
import morgan from 'morgan';

export class Pokemasters implements App {
    app: express.Application;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    routes(): void {
        // this.app.use('/auth', )
    }

    middlewares(): void {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.static('public'));
        this.app.use(morgan('dev'));
    }

    listen(port: number | string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.app.listen(port, () => {
                try {
                    console.log(`⚡ Server running on port ${port}`)
                    resolve()
                } catch (error) {
                    if (error instanceof Error) {
                        reject(error.message)
                    }
                }
            })
        })
    }
}


