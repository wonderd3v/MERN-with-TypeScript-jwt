import { useEffect, useState } from 'react';
import { ICourses } from '../../models/courses.model';
import * as coursesService from '../../services/course.servcie';
import CourseAdminItem from './course-admin-item';
import { Link } from 'react-router-dom';

const CoursesAdminList = () => {

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

            <div className="buttonContainer">
                <Link className="btn btn-primary" to="/add-courses">
                    Create a new Course
                </Link>
            </div>
            {courses.map((course) => (
                <CourseAdminItem course={course} key={course._id} />
            ))}
        </div>

    </>
}

export default CoursesAdminList;