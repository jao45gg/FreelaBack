import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import signInSchema from "../schemas/signIn.schema.js";
import signUpSchema from "../schemas/signUp.schema.js";
import { signIn, signUp, getUserById } from "../controllers/users.controller.js";
import authValidation from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.post("/signup", validateSchema(signUpSchema), signUp);
userRouter.post("/signin", validateSchema(signInSchema), signIn);
userRouter.get("/user/:id", authValidation, getUserById);

export default userRouter;