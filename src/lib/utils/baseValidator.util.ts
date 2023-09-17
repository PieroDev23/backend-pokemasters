import { NextFunction, Request, Response } from "express";
import { ValidationError } from "../interfaces/lib.interfaces";

type Body = Request['body'];

export abstract class BaseValidator {
    protected errors: ValidationError[] = [];
    private _body: Body;

    abstract validate(req: Request, res: Response, next: NextFunction): Promise<void | any>;

    setBody(body: Body) {
        this._body = body;
        return this
    }

    getBody() {
        return this._body;
    }

    protected pushErrors(error: ValidationError) {
        this.errors = [...this.errors, error];

        return this;
    }

    checkEmpty() {
        for (const prop in this._body) {
            if (prop.trim().length === 0) {
                this.pushErrors({
                    msg: `${prop} is empty`,
                    field: prop,
                });
            }
        }
        return this;
    }

    checkEmail() {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!emailRegex.test(this._body['email'])) {
            this.pushErrors({
                msg: 'Invalid format email',
                field: 'email'
            });
        }

        return this;
    }

    throwErrors(res: Response) {
        res.status(400).json({
            errors: this.errors
        })
    }

}
