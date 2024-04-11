import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Home-Page/Landingpage";
import Wolu from "./Pages/auth/SignUp";
import Login from "./Pages/auth/Login";
import Teacher from "./Pages/Teacher-Page/Teacherpage";
import Student from "./Pages/Student-Page/Studentpage";
import Classdetail from "./Pages/Teacher-Page/Detailclasspage";
import DetailTask from "./Pages/Teacher-Page/Detailtask";
import DetailTaskstudent from "./Pages/Student-Page/Detailtaskstudentpage";
import Poinpageteacher from "./Pages/Teacher-Page/PointPage";
import Quizpage from "./Pages/Teacher-Page/QuizPage";
import Quizdetail from "./Pages/Teacher-Page/Quizdetailpage";
import Memberpage from "./Pages/Teacher-Page/Memberpage";
import Forum from "./Pages/Teacher-Page/Forumpage";
import Teacherprofile from "./Pages/Teacher-Page/Accountteacher";
import Calendar from "./Pages/Teacher-Page/Calendar";
import Classdetailstudent from "./Pages/Student-Page/Detailclasstudentpage";
import QuizStudent from './Pages/Student-Page/QuizStudentPage'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/Wolu" element={<Wolu />}></Route>
        <Route path="/LoginWolu" element={<Login />}></Route>
        <Route path="/TeacherPage" element={<Teacher />}></Route>
        <Route path="/StudentPage" element={<Student />}></Route>
        <Route path="/Yourclass" element={<Classdetail />}></Route>
        <Route path="/Detailtask" element={<DetailTask />}></Route>
        <Route path="/Detailtaskstudent" element={<DetailTaskstudent />}></Route>
        <Route path="/Point" element={<Poinpageteacher />}></Route>
        <Route path="/Quizpage" element={<Quizpage />}></Route>
        <Route path="/Quizdetail" element={<Quizdetail />}></Route>
        <Route path="/Memberpage" element={<Memberpage />}></Route>
        <Route path="/Forum" element={<Forum />}></Route>
        <Route path="/Profileteacher" element={<Teacherprofile />}></Route>
        <Route path="/Calendar" element={<Calendar />}></Route>
        <Route path="/Detailclassstudent" element={<Classdetailstudent />}></Route>
        <Route path="/Quizstudent" element={<QuizStudent />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
