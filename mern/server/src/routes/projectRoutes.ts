import express, { Request, Response } from 'express';
import Project from '../models/Project.js';

const router = express.Router();

// GET project stats (Aggregation)
router.get('/stats', async (req: Request, res: Response) => {
  try {
    const stats = await Project.aggregate([
      {
        $lookup: {
          from: 'tasks',
          localField: '_id',
          foreignField: 'project',
          as: 'projectTasks'
        }
      },
      {
        $addFields: {
          totalTasks: { $size: '$projectTasks' },
          completedTasks: {
            $size: {
              $filter: {
                input: '$projectTasks',
                as: 'task',
                cond: { $eq: ['$$task.status', 'done'] }
              }
            }
          }
        }
      },
      {
        $project: {
          projectTasks: 0 // Remove the raw tasks array to keep response clean
        }
      }
    ]);
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

// GET all projects with owner populated
router.get('/', async (req: Request, res: Response) => {
  try {
    const projects = await Project.find().populate('owner', 'name email');
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// GET single project
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const project = await Project.findById(req.params.id).populate('owner', 'name email');
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// POST a new project
router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, description, owner } = req.body;
    const newProject = new Project({ title, description, owner });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error });
  }
});

export default router;
