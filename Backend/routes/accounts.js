import express from "express";
import { postLogin, postRegister } from "../controller/accounts.js"

const router = express.Router();

router.post('/login', postLogin);
router.post('/register', postRegister);

export default router;