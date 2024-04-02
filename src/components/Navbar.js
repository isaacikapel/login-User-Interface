import { Link } from "react-router-dom/cjs/react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="links2">
            <Link to="/">Home</Link>    
            </div>

            <div className="links">
                <Link to="/StudentForm">Student Form</Link>
                <Link to="/CourseForm">Course Form</Link>
                <Link to="/RegForm">Registration Form</Link>
            </div>

            <div className="links2">
                <Link to="/LoginForm">Login</Link>
                <Link to="/SignUpForm">Sign Up</Link>
                
            </div>
        </nav> 
    );
}

export default Navbar;