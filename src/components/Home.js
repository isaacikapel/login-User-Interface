import DisplayStudents from "./DisplayStudents";
import DisplayCourses from "./DisplayCourses";
import DisplayReg from "./DisplayReg";
const Home = () => {
  return (
      <div className="home">
          
          <div className="home1">
            <h1>STUDENTS</h1>
          <DisplayStudents/>
          </div>

          <div className="home1">
          <h1>COURSES</h1>
          <DisplayCourses/>
          </div>

          <div className="home1">
          <h1>REGISTRATION DETAILS</h1>
          <DisplayReg/>
          </div>
      </div>

      
      

  );
}

export default Home;