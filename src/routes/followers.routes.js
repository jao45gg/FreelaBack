import { Router } from "express";
import authValidation from "../middlewares/auth.middleware.js";
import { followUser, getFollowers } from "../controllers/followers.controller.js";

const followersRouter = Router();

followersRouter.post("/followers/follow/:userId", authValidation, followUser)
followersRouter.get("/followers/:userId", authValidation, getFollowers);

export default followersRouter;