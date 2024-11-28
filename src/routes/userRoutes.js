const express=require('express');
const userRouter=express.Router();
const verifyToken =require('../middlewares/authMiddleware');
const authorizeRoles=require('../middlewares/roleMiddleware')

const userController=require('../controllers/userControllers')



// only admin can access this routes
userRouter.get('/admin',verifyToken,authorizeRoles("admin"),userController.admin)

// Both admin and Manager can access this routes
userRouter.get('/manager',verifyToken,authorizeRoles("admin","manager"),userController.manager)

// All can access this access this router
userRouter.get('/user',verifyToken,authorizeRoles("admin","manager","user"),userController.user)


module.exports=userRouter;