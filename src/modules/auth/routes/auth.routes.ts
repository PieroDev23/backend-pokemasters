import { NextFunction, Request, Response, Router, response } from "express";
import { LoginController } from "../controllers/login.controller";
import { RegisterController } from "../controllers/register.controller";
import { Validator } from "@modules/shared/middlewares/validator.middleware";


const loginController = new LoginController();
const registerController = new RegisterController();
const authValidator = new Validator();
const authRouter = Router();

authRouter.post('/register',
    (req: Request, res: Response, next: NextFunction) => {
        authValidator.validate(req, res, next);
    },
    (req: Request, res: Response) => {
        registerController.execute(req, res);
    });

authRouter.post('/login', (req, res) => {
    loginController.execute(req, res);
});


export { authRouter }


