import { Router } from "express";
import { LoginController } from "../controllers/login.controller";

const loginController = new LoginController();

const authRouter = Router();
authRouter.post('/register', (req, res) => {
    res.send('register')
});

authRouter.post('/login', (req, res) => {
    loginController.execute(req, res);
});


export { authRouter }


