import { Router } from 'express'
import UserController from './controllers/UserController'
import SessonController from './controllers/SessonController'
import PermissionController from './controllers/PermissionController'
import RoleController from './controllers/RoleController'
import ProductController from './controllers/ProductController'

import { whois } from './middleware/permission'

const router = Router();

router.post('/users', UserController.create)
router.post('/sessons', SessonController.create)
router.post('/permissions', PermissionController.create)
router.post('/roles', RoleController.create)

router.post('/products', whois(['ROLE_ADMIN']), ProductController.create)
router.get('/products', whois(['ROLE_ADMIN']), whois(['ROLE_USER']), ProductController.index)
router.get('/products/:id', whois(['ROLE_ADMIN']), whois(['ROLE_ADMIN']), ProductController.show)

export default router