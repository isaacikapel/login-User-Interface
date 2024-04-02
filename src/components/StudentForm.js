import React , { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom";

const StudentForm = () => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        gender: ''
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
        if (data.firstName.length === 0) {
            toast.error("First name field cannot be empty", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        } else if (data.lastName.length === 0) {
            toast.error("Last name field cannot be empty", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        } else if (data.gender.length === 0) {
            toast.error("Gender field cannot be empty", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        } else {
            axios.post("http://localhost:4000/api/students/addStudent", data)
            .then(res => {
                setData(res.data);
    
                toast.success("New student successfully added", {
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
                     
                        <input type="text"  placeholder="FirstName"  name="firstName" value={data.firstName} onChange={handleChange}/><br/>
                    
                    
                        <input type="text" placeholder="LastName"  name="lastName" value={data.lastName} onChange={handleChange}/><br/>
                    
                    
                        <input type="text"  placeholder="Gender"  name="gender" value={data.gender} onChange={handleChange}/><br/>
                    
                    <div className="form-check">
                        <button type="submit" className="btn btn-primary justify-content-center">Add Student</button>
                        <ToastContainer/>
                    </div>
                </div>
            </form>
            <div className="home1 btn">
                <Link to="/DisplayStudents">Display All Students</Link>
            </div>
        </div>
    );
}

export default StudentForm;