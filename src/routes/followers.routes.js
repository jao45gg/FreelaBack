import { Router } from "express";
import authValidation from "../middlewares/auth.middleware.js";
import { followUser, getFollowers, getFollows } from "../controllers/followers.controller.js";

const followersRouter = Router();

followersRouter.post("/followers/follow/:userId", authValidation, followUser)
followersRouter.get("/followers/:userId", authValidation, getFollowers);
followersRouter.get("/followers/follows/:userId", authValidation, getFollows);

export default followersRouter;