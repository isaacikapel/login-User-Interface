import DisplayStudents from "./DisplayStudents";
import DisplayCourses from "./DisplayCourses";
const Home = () => {
  return (
      <div className="home">
          
          <div className="home1">
          <DisplayStudents/>
          
          </div>

          <div className="home1">
          <DisplayCourses/>
          </div>
      </div>

      
      

  );
}

export default Home;