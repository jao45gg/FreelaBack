import { Router } from "express";
import authValidation from "../middlewares/auth.middleware.js";
import { followUser, getFollowers, getFollows } from "../controllers/followers.controller.js";
import checkUser from "../middlewares/checkUser.middleware.js";

const followersRouter = Router();

followersRouter.post("/followers/follow/:userId", authValidation, checkUser, followUser)
followersRouter.get("/followers/follows/:userId", authValidation, checkUser, getFollows);
followersRouter.get("/followers/:userId", authValidation, checkUser, getFollowers);

export default followersRouter;