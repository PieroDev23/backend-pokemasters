import { BaseValidator } from "@base/lib/utils/baseValidator.util";
import { Request, Response, NextFunction } from "express";

export class Validator extends BaseValidator {

    async validate(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {

            this.setBody(req.body)
                .checkEmpty()
                .checkEmail();

            if (this.errors.length > 0) {
                this.throwErrors(res);
                return;
            }

            next();

        } catch (error) {

            if (error instanceof Error) {
                console.log(error.message);

                res.status(500).json({
                    msg: 'Internal server error',
                    error: error.message
                });
            }

        }
    }

}