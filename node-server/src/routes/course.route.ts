import { Router } from 'express';
import storage  from "../config/muler";

const router = Router();
const multerConfig = storage.single('photo');

import userController from "../controllers/course.controller";

router.get('/', userController.getCourses);

router.get("/:id", userController.getByid);

router.post("/add", multerConfig, userController.createCourse);

router.put("/edit/:id", userController.updateCourse);

router.delete("/delete/:id", userController.deleteCourse);


export default router;