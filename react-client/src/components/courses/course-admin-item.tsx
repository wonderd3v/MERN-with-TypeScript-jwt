import React from "react";
import {useHistory} from 'react-router-dom'
import * as courseService from "../../services/course.servcie";
import { ICourses } from "../../models/courses.model";

import "./CourseItem.css";

interface Props {
  course: ICourses;

}

const CourseAdminItem = (props: Props) => {
  const { course } = props;

  const history = useHistory();

  const handleDelete = async (id: string) => {
    await courseService.deleteCourseById(id);
  };

  return (
    <div className="col-md-4 p-2">
      <div
        className="card card-body video-card animate__animated animate__backInUp"
        style={{ cursor: "pointer" }}
        onClick={() => history.push(`/update/${course._id}`)}
      >
        <div className="card-img">
          <img className="img-fluid" src={course.photo} alt="course" />
        </div>
        <div className="d-flex justify-content-between">
          <h5>{course.name}</h5>
          <span
            className="text-danger"
            onClick={() => course._id && handleDelete(course._id)}
          >
            X
          </span>
        </div>
        <p>{course.category}</p>
      </div>
    </div>
  );
};

export default CourseAdminItem;