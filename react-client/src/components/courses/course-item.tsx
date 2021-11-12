import React from "react";
import { ICourses } from "../../models/courses.model";

import "./CourseItem.css";

interface Props {
  course: ICourses;

}

const CourseItem = (props: Props) => {
  const { course } = props;
  return (
    <div className="col-md-4 p-2">
      <div
        className="card card-body video-card animate__animated animate__backInUp"
        style={{ cursor: "pointer" }}
      >
        <div className="card-img">
          <img className="img-fluid" src={course.photo} alt="course" />
        </div>
        <div className="d-flex justify-content-between">
          <h5>{course.name}</h5>
        </div>
        <p>{course.category}</p>
      </div>
    </div>
  );
};

export default CourseItem;