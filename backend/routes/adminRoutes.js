import { Router } from "express";
import { addUser, getAllUsers } from "../controller/adminController.js";


const router = Router();

router.post('/add-user' , addUser)
router.get('/get-users', getAllUsers)
// router.get("/get-plans", getPlans);


export default router;