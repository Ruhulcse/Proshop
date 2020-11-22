import express from 'express'
const router = express.Router();
import { 
    authUser,
    deleteUsers,
    getUserProfile,
    getUsers,
    registerUser,
    updateUserProfile,
} from '../controllers/userController.js'
import { protect,admin } from '../middleware/authMiddleWare.js'

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser)
router.route('/profile')
      .get(protect,getUserProfile)
      .put(protect,updateUserProfile)

router.route('/:id').delete(protect,admin,deleteUsers)
export default router