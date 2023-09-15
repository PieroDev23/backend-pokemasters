import { Router } from "express";
import { LoginController } from "../controllers/login.controller";

const authRouter = Router();
authRouter.post('/register', (req, res) => {
    res.send('register')
});

authRouter.post('/login', (req, res) => {
    const loginController = new LoginController();
    loginController.execute(req, res);
});


export { authRouter }


