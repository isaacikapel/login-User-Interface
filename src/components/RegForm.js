import React , { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom";

const RegForm = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
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
        if (data.name.length === 0) {
            toast.error(" name field cannot be empty", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        } else if (data.email.length === 0) {
            toast.error("email field cannot be empty", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        } else if (data.password.length === 0) {
            toast.error("please input password", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        } else {
            axios.post("http://localhost:4000/api/reg/addReg", data)
            .then(res => {
                setData(res.data);
    
                toast.success("Registration successfull", {
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
                     
                        <input type="text"  placeholder="Name"  name="name" value={data.name} onChange={handleChange}/><br/>
                    
                    
                        <input type="text" placeholder="Email"  name="email" value={data.email} onChange={handleChange}/><br/>
                    
                    
                        <input type="text"  placeholder="Confirm assword"  name="password" value={data.password} onChange={handleChange}/><br/>
                    
                    <div className="form-check">
                        <button type="submit" className="btn btn-primary justify-content-center">Register</button>
                        <ToastContainer/>
                    </div>
                </div>
            </form>
            <div className="home1 btn">
                <Link to="/DisplayReg">Display Registration Details</Link>
            </div>
        </div>
    );
}

export default RegForm;