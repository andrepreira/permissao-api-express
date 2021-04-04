import { Router } from 'express'
import UserController from './controllers/UserController';
import SessonController from './controllers/SessonController';

const router = Router();

router.post('/users', UserController.create)
router.post('/sessons', SessonController.create)

export default router 