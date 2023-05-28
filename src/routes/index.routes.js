import { Router } from "express";
import userRouter from "./users.routes.js";
import postsRouter from "./posts.routes.js";
import followersRouter from "./followers.routes.js";

const router = Router();
router.use(userRouter);
router.use(postsRouter);
router.use(followersRouter);

export default router;