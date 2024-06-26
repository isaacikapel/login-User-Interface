import React , { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom";

const CourseForm = () => {
    const [data, setData] = useState({
        courseName: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData ((prev) => {
            return {...prev, [name]: value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form Validation
        if (data.courseName.length === 0) {
            toast.error("Course name field cannot be empty", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        } else {
            axios.post("http://localhost:4000/api/courses/addCourse", data)
            .then(res => {
                setData(res.data);
    
                toast.success("New course successfully added", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                })
            }).catch (err => {
                console.log(err)
        })  
    }}

    return (
        <div>
          <form onSubmit={handleSubmit} className="form">
                <div className="form2">
                     
                        <input type="text"  placeholder="courseName"  name="courseName" value={data.courseName} onChange={handleChange}/><br/>
                    
                    
                    <div className="form-check">
                        <button type="submit" className="btn btn-primary justify-content-center">Add Course</button>
                        <ToastContainer/>
                    </div>
                </div>
            </form>
            <div className="btn btn-dark">
                <Link to="/DisplayCourses">Display All Courses</Link>
            </div>
        </div>
    );
}

export default CourseForm;