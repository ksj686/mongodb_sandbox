import express, { Request, Response } from 'express';
import User from '../models/User.js';

const router = express.Router();

// GET all users
router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// POST a new user
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, email, age } = req.body;
    const newUser = new User({ name, email, age });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data' });
  }
});

export default router;
