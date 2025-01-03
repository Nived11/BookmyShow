import { Router } from "express";
import * as rh from "./RequestHandler/user.requesthandler.js"
import * as mv from "./RequestHandler/movies.requesthandler.js"
import Auth from "./middleware/Auth.js";
const router=Router();

router.route("/adduser").post(rh.addUser);
router.route("/login").post(rh.loginUser);
router.route("/home").get(Auth,rh.Home);
router.route("/emailverification").post(rh.emailverification);
router.route("/addmovie").post(mv.addMovie);
router.route("/getmovies").get(mv.getMovies);
router.route("/getsecmovie/:_id").get(mv.getSecMovie);

export default router;