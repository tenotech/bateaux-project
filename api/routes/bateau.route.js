import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createBateau, getBateau, updateBateau, getAvailableBateau } from '../controllers/bateau.controller.js';

const router = express.Router();

router.post("/", verifyToken, createBateau);
router.get("/:id", verifyToken, getBateau);
router.put("/:id", verifyToken, updateBateau);
router.get("/available-bateau", getAvailableBateau);

export default router;
