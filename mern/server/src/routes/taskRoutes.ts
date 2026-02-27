import express, { Request, Response } from 'express';
import Task from '../models/Task.js';

const router = express.Router();

// GET all tasks (optionally by project)
router.get('/', async (req: Request, res: Response) => {
  try {
    const { project } = req.query;
    const filter = project ? { project } : {};
    const tasks = await Task.find(filter).populate('project', 'title');
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// POST a new task for a project
router.post('/', async (req: Request, res: Response) => {
  try {
    const { content, status, priority, tags, project } = req.body;
    const newTask = new Task({ content, status, priority, tags, project });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error });
  }
});

export default router;
