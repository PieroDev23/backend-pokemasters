import { BaseController } from "@base/lib/http/BaseController.http";
import { Request, Response } from "express";


export class RegisterController extends BaseController {

    protected async response(req: Request, res: Response): Promise<any> {
        const body = req.body;

        try {

            this.ok(res, {
                id: 1,
                body
            })

        } catch (err) {

        }

    }
}