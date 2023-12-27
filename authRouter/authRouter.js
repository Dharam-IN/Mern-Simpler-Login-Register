import express from 'express';
import { loginController, registerController } from '../authController/authController.js';

const router = express.Router();

// Register User
router.post('/register', registerController)

// Login User
router.post('/login', loginController)

export default router;