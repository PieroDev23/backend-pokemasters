import { Request, Response, NextFunction } from "express";

export function sanatizeBody(req: Request, res: Response, next: NextFunction) {
    const bodyMatrix = Object.entries(req.body);

    const sanatizeBody = bodyMatrix.reduce((prev, matrix: [string, any]) => {
        const [key, rawValue] = matrix;
        const value = typeof rawValue === 'string' ?
            rawValue.trim().toLowerCase() :
            rawValue.trim();

        return {
            ...prev,
            [key]: value,
        }
    }, {})

    req.body = sanatizeBody;
    next();
}

