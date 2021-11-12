import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import * as courseService from "../../services/course.servcie";
import { ICourses } from "../../models/courses.model";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Params {
  id?: string;
}

const CourseForm = () => {
  const initialState = {
    name:'',
    code:'',
    category:'',
    photo:''
    
  };

  const [course, setCourses] = useState<ICourses>(initialState);

  const history = useHistory();
  const params = useParams<Params>();

  const getCourse = async (id: string) => {
    const res = await courseService.getCoursesById(id);
    const { name, code, category, photo } = res.data;
    setCourses({ name, code, category, photo });
  };

  useEffect(() => {
    if (params.id) getCourse(params.id);
  }, [params.id]);

  const handleInputChange = (e: InputChange) =>
  setCourses({ ...course, [e.target.name]: e.target.value });

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!params.id) {
      await courseService.createNewCourse(course);
      setCourses(initialState);
      toast.success("New Course Added");
    } else {
      await courseService.updateCourse(params.id, course);
    }
    history.push("/courses-admin");
  };

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card my-auto">
          <div className="card-body">
            <h3>New Course</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Write a name for this course"
                  className="form-control m-2"
                  autoFocus
                  onChange={handleInputChange}
                  value={course.name}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="code"
                  placeholder="Write a code"
                  className="form-control m-2"
                  autoFocus
                  onChange={handleInputChange}
                  value={course.code}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Write the url of the photo"
                  className="form-control m-2"
                  autoFocus
                  onChange={handleInputChange}
                  value={course.photo}
                />
              </div>

              <div className="form-group">
                <textarea
                  name="category"
                  rows={3}
                  className="form-control m-2"
                  placeholder="Write a category"
                  onChange={handleInputChange}
                  value={course.category}
                ></textarea>
              </div>

              {params.id ? (
                <button className="btn btn-info">Update</button>
              ) : (
                <button className="btn btn-primary">Create</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseForm;