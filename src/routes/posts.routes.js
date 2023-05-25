import { Router } from "express";
import authValidation from "../middlewares/auth.middleware.js";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import { newPost, homePage } from "../controllers/posts.controller.js";
import postSchema from "../schemas/posts.schema.js";

const postsRouter = Router();

postsRouter.post("/newPost", authValidation, validateSchema(postSchema), newPost);
postsRouter.get("/me", authValidation, homePage);

export default postsRouter;