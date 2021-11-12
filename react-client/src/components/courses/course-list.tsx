import { useEffect, useState } from 'react';
import { ICourses } from '../../models/courses.model';
import * as coursesService from '../../services/course.servcie';
import CourseItem from './course-item';

const CoursesList = () => {

    const [courses, setCourses] = useState<ICourses[]>([]);

    const getCourses = async () => {
        const response = await coursesService.getCourses();

        setCourses(response.data);
    }

    useEffect(() => {
        getCourses();

    }, []);

    return <>
        <div className="row">

            {courses.map((course) => (
                <CourseItem course={course} key={course._id} />
            ))}
        </div>

    </>
}

export default CoursesList;