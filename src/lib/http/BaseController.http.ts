import { Response, Request } from "express";

/**
 *  @class
 *  A model for all my controllers classes.
 *  The ```controller``` should be able to:
 *  - take in a request and a response.
 *  - return a ```200``` with a ```response``` ```payload``` / ```dto```
 *  - return a ```200/201``` without a ```response``` ```payload``` / ```dto```
 *  - return a ```400``` error
 *  - return a ```500``` error
 */
export abstract class BaseController {

    protected abstract response(req: Request, res: Response): Promise<void | any>

    public async execute(req: Request, res: Response): Promise<void> {
        try {
            this.response(req, res);
        } catch (error) {
            console.log('[BASE CONTROLLER] Uncaught controller error');
            console.log(error);
            this.serverError(res, error)
        }
    }

    protected json(res: Response, code: number, message: unknown) {
        res.status(code).json({ message });
    }

    protected ok<T>(res: Response, payload: T) {
        this.json(res, 200, payload);
    }

    protected created(res: Response, payload?: unknown) {
        this.json(res, 201, payload === null ? { msg: 'created succesfully' } : payload);
    }

    protected badRequest(res: Response, payload?: unknown) {
        this.json(res, 400, payload === null ? { msg: 'bad request' } : payload);
    }

    protected unauthorized(res: Response, payload?: unknown) {
        this.json(res, 401, payload === null ? { msg: 'bad request' } : payload);
    }

    protected serverError(res: Response, error: unknown) {
        if (error instanceof Error) {
            this.json(res, 500, { msg: 'internal server error', error: error.message });
        }
    }
}