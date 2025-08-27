import { Router } from "express";
import { userLogin, userSubscription } from "../controller/userController.js";


const router = Router();

router.post('/subscribe', userSubscription);
router.put('/login', userLogin);

export default router;