import http from "../config/axios-config";
import { ICourses } from "../models/courses.model";


export const getCourses = async () => {
    return await http.get<ICourses[]>(`/courses`);
};

export const getCoursesById = async (id: string) => {
    return await http.get<ICourses>(`/courses/${id}`);
};

export const createNewCourse = async (video: ICourses) => {
    return await http.post(`/courses/add`, video);
};

export const deleteCourseById = async (id: string) => {
    return await http.delete(`/courses/delete/${id}`);
    
};

export const updateCourse = async (id: string, video: ICourses) => {
    return await http.put(`/courses/edit/${id}`, video);
};
