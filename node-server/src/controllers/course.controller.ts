import { Request, Response } from 'express';
import Course, { ICourses } from "../models/courses.model";

const getCourses = async (req: Request, res: Response) => {

    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.json(error);
    }
}

const getByid = async (req: Request, res: Response) => {
    const courseFound = await Course.findById(req.params.id);

    if (!courseFound) return res.status(204).json();

    return res.json(courseFound);
}

const createCourse = async (req: Request, res: Response) => {

    const newCourse = new Course({
        name: req.body.name,
        photo: req.file?.path,
        category: req.body.category,
        code: req.body.code,
    });

    const savedCourse: ICourses = await newCourse.save();
    res.json(savedCourse);
}

const updateCourse = async (req: Request, res: Response): Promise<Response> => {

    const courseUpdated = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!courseUpdated) return res.status(204).json();
    return res.json(courseUpdated);
};

const deleteCourse = async (req: Request, res: Response) => {

    const courseFound = await Course.findByIdAndDelete(req.params.id);

    if (!courseFound) return res.status(204).json();

    return res.status(204).json();
}

export default {
    getCourses,
    createCourse,
    updateCourse,
    deleteCourse,
    getByid
}



