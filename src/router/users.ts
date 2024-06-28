import users from "@/controllers/users";
import { Router } from "express";

const router: Router = Router();

router.post("/login", users.login);
router.post("/register", users.register);

export default router;
