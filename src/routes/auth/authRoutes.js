import express from 'express';
import { registerUser, loginUser } from '../../controllers/auth/authController.js';
import tokenValidation from '../../middlewares/auth/tokenValidation.js';

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/verify-token", tokenValidation, (req, res) => {
    res.status(200).json({ message: "Token válido!", user: req.user });
});

export default router;