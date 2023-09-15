import { BaseController } from "@base/lib/http/BaseController.http";
import { Request, Response } from "express";



export class LoginController extends BaseController {
    protected async response(req: Request, res: Response): Promise<any> {
        try {
            this.ok(res, 'everything its fine')
        } catch (error) {
            this.serverError(res, error);
        }
    }

}