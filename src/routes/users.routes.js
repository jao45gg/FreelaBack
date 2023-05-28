import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import signInSchema from "../schemas/signIn.schema.js";
import signUpSchema from "../schemas/signUp.schema.js";
import { signIn, signUp, getUserById, getUsers } from "../controllers/users.controller.js";
import authValidation from "../middlewares/auth.middleware.js";
import checkUser from "../middlewares/checkUser.middleware.js";
import checkEmailMiddleware from "../middlewares/checkEmail.middleware.js";

const userRouter = Router();

userRouter.post("/signup", validateSchema(signUpSchema), signUp);
userRouter.post("/signin", validateSchema(signInSchema), checkEmailMiddleware, signIn);
userRouter.get("/user/:userId", authValidation, checkUser, getUserById);
userRouter.get("/users", authValidation, getUsers);

export default userRouter;