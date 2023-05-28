import { Router } from "express";
import authValidation from "../middlewares/auth.middleware.js";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import { newPost } from "../controllers/posts.controller.js";
import postSchema from "../schemas/posts.schema.js";

const postsRouter = Router();

postsRouter.post("/newPost", authValidation, validateSchema(postSchema), newPost);

export default postsRouter;