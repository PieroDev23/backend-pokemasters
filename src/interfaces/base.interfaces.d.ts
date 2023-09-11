import express from 'express';

export interface App {
    app: express.Application;
    routes(): void;
    middlewares(): void
    listen(port: number | string): void;
}