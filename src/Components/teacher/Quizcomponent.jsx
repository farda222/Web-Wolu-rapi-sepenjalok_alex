import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavbarUtama";
import Iconaccount from "../../assets/img/Account.jpg";
import Noquiz from "../../assets/img/Noquiz.svg";
import Penicon from "../../assets/img/Pen.svg";
import Icon from "../../assets/img/Iconquiz.svg";

const QuizComponent = () => {
  const navigate = useNavigate();
  const [deadline, setDeadline] = useState("");
  const [timer, setTimer] = useState("");
  const [questions, setQuestions] = useState([]);
  const [uploadedQuizzes, setUploadedQuizzes] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };

  const handleTimerChange = (e) => {
    setTimer(e.target.value);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, questions.length + 1]);
  };

  const handleUploadQuiz = () => {
    const uploadedQuestions = questions.map((questionId) => ({
      id: questionId,
      title: document.getElementById(`question${questionId}`).value,
      options: {
        A: document.getElementById(`optionA${questionId}`).value,
        B: document.getElementById(`optionB${questionId}`).value,
        C: document.getElementById(`optionC${questionId}`).value,
        D: document.getElementById(`optionD${questionId}`).value,
      },
    }));

    const newQuiz = {
      id: uploadedQuizzes.length + 1,
      questions: uploadedQuestions,
      deadline: deadline,
      timer: timer,
    };

    setUploadedQuizzes([...uploadedQuizzes, newQuiz]);
    setShowOverlay(false);
    setQuestions([]);
    setDeadline("");
    setTimer("");
  };

  return (
    <div className="font-Jakarta overflow-y-hidden relative">
      <Navbar />
      <nav className="bg-white p-4 px-12 py-7 font-Jakarta border-b-2 border-neutral-300">
        <ul className="flex justify-center items-center gap-3 w-full lg:gap-9 lg:justify-start">
          <li className="mr-6">
            <a onClick={() => navigate("/Yourclass")} className="text-black hover:text-indigo-600 hover:border-b-4 hover:border-indigo-600 w-full font-semibold transition-all">
              Task
            </a>
          </li>
          <li className="mr-6">
            <a onClick={() => navigate("/Quizpage")} className="text-indigo-600 hover:text-indigo-600 border-b-4 border-indigo-600 w-full font-semibold transition-all">
              Quiz
            </a>
          </li>
          <li className="mr-6">
            <a onClick={() => navigate("/Memberpage")} href="#" className="text-black hover:text-indigo-600 hover:border-b-4 hover:border-indigo-600 w-full font-semibold transition-all">
              Member
            </a>
          </li>
          <li>
            <a onClick={() => navigate("/Forum")} className="text-black hover:text-indigo-600 hover:border-b-4 hover:border-indigo-600 w-full font-semibold transition-all">
              Forum
            </a>
          </li>
        </ul>
      </nav>
      <div className="lg:flex lg:justify-center lg:items-center lg:mx-auto">
        <div className="lg:w-full 2xl:w-full 2xl:h-full">
          <div className="flex justify-center items-center mt-7 ml-1 font-Jakarta lg:mt-12 2xl:mt-12 2xl:h-full gap-1">
            <h1 className="text-black font-semibold text-2xl lg:text-3xl 2xl:text-3xl">English XI PPLG 1</h1>
            <button className="text-white bg-indigo-600 px-4 py-2 font-semibold rounded-md text-xs ml-5 mr-5 lg:mr-1 lg:ml-[35rem] 2xl:ml-[55rem]">Share</button>
            <div className="relative -ml-5">
              <button className="flex items-center justify-center w-8 h-8 bg-white rounded-full focus:outline-none focus:bg-gray-300 lg:ml-6">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={3.75} d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="flex gap-6 mt-10 bg-neutral-100 p-3 font-Jakarta">
            <h1 className="text-green-500 font-semibold ml-3 lg:ml-48 2xl:ml-[19.6rem]">Online</h1>
            <div className="flex gap-2">
              {[...Array(5)].map((_, index) => (
                <img key={index} className="w-7 h-7 rounded-full " src={Iconaccount} alt="Icon Account" />
              ))}
            </div>
          </div>

          {uploadedQuizzes.map((quiz) => (
            <div key={quiz.id}>
              <div className="mx-auto container mt-6 justify-center align-middle items-center lg:ml-[26.5rem] 2xl:ml-[42.5rem]">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mx-5 lg:mx-2">
                  <div className="bg-white p-4 rounded-md shadow-md border-2 border-neutral-300 flex">
                    <img src={Icon}></img>
                    <div>
                      <h3 className="text-lg font-semibold mt-[0.20rem] ml-4">English Listening - Quiz</h3>
                      <p className="ml-4 text-sm">{quiz.deadline} - <span className="text-red-500 font-semibold">Ready!</span></p>
                    </div>
                    <p className="ml-4 hidden">{quiz.questions.length} questions</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {uploadedQuizzes.length === 0 && (
            <div className="flex justify-center mx-auto container align-middle items-center mt-20">
              <img className="lg:w-60 2xl:w-72" src={Noquiz} alt="No Quiz" />
            </div>
          )}

          <div className="flex mx-auto justify-center align-middle items-center container mt-10 mb-10">
            <button className="bg-indigo-600 text-white px-6 py-2 text-sm rounded-sm text-center" onClick={() => setShowOverlay(true)}>
              Add Quiz
            </button>
          </div>
        </div>
      </div>

      {showOverlay && (
        <div className="overlay-wrapper">
          <div className="font-Jakarta absolute top-0 left-0 w-full h-full bg-white" style={{ zIndex: 9999 }}>
            <div className="flex justify-center mx-auto align-middle items-center container mt-12 gap-16 lg:mt-20">
              <h1 className="text-xl font-semibold">English XI PPLG 1 - Quiz</h1>
              <button className="text-white bg-indigo-600 px-4 py-2 font-semibold rounded-md text-xs ml-5 mr-5 lg:-mr-7 lg:ml-[35rem] hidden lg:block 2xl:block">Share</button>
              <div>
                <img src={Penicon} alt="Pen Icon" />
              </div>
            </div>
            <div className="flex justify-center mx-auto align-middle items-center container mt-20 gap-5 px-10 ml-3 2xl:ml-48 2xl:gap-36">
              <div className="flex flex-col space-y-4">
                <label htmlFor="deadline" className="text-gray-700 font-semibold text-xs">
                  Deadline:
                </label>
                <input type="date" id="deadline" name="deadline" placeholder="No Time Limit" className="border border-gray-300 rounded-md p-4 w-full bg-neutral-200 text-black" value={deadline} onChange={handleDeadlineChange} />
              </div>
              <div className="flex flex-col space-y-4">
                <label htmlFor="timer" className="text-gray-700 font-semibold text-xs">
                  Timer (minutes):
                </label>
                <input type="number" id="timer" name="timer" placeholder="No Time Limit" min="1" step="1" className="border border-gray-300 rounded-md p-4 w-[83%] bg-neutral-200 text-black" value={timer} onChange={handleTimerChange} />
              </div>
            </div>
            {questions.map((questionId) => (
              <div id={`Soal${questionId}`} className="container mt-16 px-5 flex mx-auto items-center align-middle justify-center" key={questionId}>
                <div className="flex flex-col space-y-4">
                  <div className="relative flex items-center">
                    <h1 className="ml-2 mr-1">{questionId}.</h1>
                    <input placeholder="Questions" type="text" id={`question${questionId}`} name={`question${questionId}`} className="rounded-md p-4 w-[83%] text-sm bg-white text-black" />
                    <div className="absolute top-0 right-0 h-full flex items-center mr-3">
                      <label htmlFor={`image${questionId}`} className="cursor-pointer"></label>
                    </div>
                  </div>
                  <div className="flex flex-wrap ml-4">
                    <div className="flex flex-col space-y-4 items-start w-1/2">
                      <div className="flex space-x-4 items-center">
                        <input type="checkbox" id={`optionA${questionId}`} name={`answer${questionId}`} value="A" />
                        <input type="text" placeholder="A" className="border border-gray-300 bg-neutral-200 rounded-md p-2 w-[70%] text-sm" />
                      </div>
                      <div className="flex space-x-4 items-center">
                        <input type="checkbox" id={`optionB${questionId}`} name={`answer${questionId}`} value="B" />
                        <input type="text" placeholder="B" className="border border-gray-300 bg-neutral-200 rounded-md p-2 w-[70%] text-sm" />
                      </div>
                    </div>
                    <div className="flex flex-col space-y-4 items-start w-1/2">
                      <div className="flex space-x-4 items-center">
                        <input className="ml-2" type="checkbox" id={`optionC${questionId}`} name={`answer${questionId}`} value="C" />
                        <input type="text" placeholder="C" className="border border-gray-300 bg-neutral-200 rounded-md p-2 w-[70%] text-sm" />
                      </div>
                      <div className="flex space-x-4 items-center">
                        <input className="ml-2" type="checkbox" id={`optionD${questionId}`} name={`answer${questionId}`} value="D" />
                        <input type="text" placeholder="D" className="border border-gray-300 bg-neutral-200 rounded-md p-2 w-[70%] text-sm" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="ml-7 mt-10 lg:ml-44">
              <button onClick={handleAddQuestion} className="px-4 py-2 border-indigo-600 border-2 bg-white text-indigo-600 rounded-sm text-xs">
                Add Question
              </button>
            </div>
            <div className="float-right mr-7 lg:mr-44 mb-10">
              <button onClick={handleUploadQuiz} className="bg-indigo-600 text-white px-7 py-4 text-xs">
                Upload Quiz
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
