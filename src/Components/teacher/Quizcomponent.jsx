import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavbarUtama";
import Iconaccount from "../../assets/img/Account.jpg";
import Noquiz from "../../assets/img/Noquiz.svg";
import Penicon from "../../assets/img/Pen.svg";

const QuizComponent = () => {
  const navigate = useNavigate();
  const [deadline, setDeadline] = useState("");
  const [timer, setTimer] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [uploadedQuestions, setUploadedQuestions] = useState([]);
  const [showMainContent, setShowMainContent] = useState(true); // State untuk mengontrol tampilan konten utama

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
    const uploadedQuiz = questions.map((questionId) => ({
      id: questionId,
      question: document.getElementById(`question${questionId}`).value,
      options: {
        A: document.getElementById(`optionA${questionId}`).value,
        B: document.getElementById(`optionB${questionId}`).value,
        C: document.getElementById(`optionC${questionId}`).value,
        D: document.getElementById(`optionD${questionId}`).value,
      },
    }));
    setUploadedQuestions(uploadedQuiz);
    setShowOverlay(false);
    setShowMainContent(true); // Menampilkan kembali konten utama setelah upload
  };

  return (
    <div className="font-Jakarta overflow-y-hidden relative">
      <Navbar />
      {uploadedQuestions.length === 0 && (
        <nav className="bg-white p-4 px-12 py-7 font-Jakarta lg:float-left border-b-2 border-neutral-300 lg:w-full 2xl:w-full">
          <ul className="flex justify-between items-center lg:gap-14 lg:float-left 2xl:gap-24 2xl:float-left">
            <li className="mr-2">
              <a onClick={() => navigate("/Yourclass")} className="text-black hover:text-indigo-600 hover:border-b-4 hover:border-indigo-600 w-56 font-semibold transition-all">
                Task
              </a>
            </li>
            <li className="mr-2">
              <a onClick={() => navigate("/Quizpage")} className="text-indigo-600 hover:text-indigo-600 border-b-4 border-indigo-600 w-56 font-semibold transition-all">
                Quiz
              </a>
            </li>
            <li className="mr-2">
              <a onClick={() => navigate("/Memberpage")} href="#" className="text-black hover:text-indigo-600 hover:border-b-4 hover:border-indigo-600 w-56 font-semibold transition-all">
                Member
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/Forum")} className="text-black hover:text-indigo-600 hover:border-b-4 hover:border-indigo-600 w-56 font-semibold transition-all">
                Forum
              </a>
            </li>
          </ul>
        </nav>
      )}
      {showMainContent && ( // Menambahkan kondisi untuk menampilkan konten utama
        <div>
          <div className="flex justify-center align-middle items-center mx-auto container gap-6 mt-7 ml-1 font-Jakarta lg:mt-24 2xl:mt-32 2xl:ml-5">
            <h1 className="text-black font-semibold text-2xl lg:text-3xl 2xl:ml-60">English XI PPLG 1</h1>
            <button className="text-white bg-indigo-600 w-16 h-7  font-semibold rounded-md text-xs lg:ml-[30rem] lg:w-20 lg:h-9 2xl:ml-[55rem]">Share</button>
            <div className="relative flex-row -ml-4">
              <button className="flex items-center justify-center w-8 h-8 bg-white rounded-full focus:outline-none focus:bg-gray-300 lg:block lg:ml-6">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={3.75} d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="flex gap-6 mt-10 bg-neutral-100 p-3 font-Jakarta">
            <h1 className="text-green-500 font-semibold ml-3 lg:ml-48 2xl:ml-60">Online</h1>
            <div className="flex gap-2">
              {[...Array(5)].map((_, index) => (
                <img key={index} className="w-7 h-7 rounded-full " src={Iconaccount} alt="Icon Account" />
              ))}
            </div>
          </div>
          <div id="Halmanutama" className={`flex justify-center mx-auto container align-middle items-center mt-20`}>
            <img className="lg:w-60 2xl:w-72" src={Noquiz} alt="No Quiz" />
          </div>
          <div className="flex mx-auto justify-center align-middle items-center container mt-10 mb-10">
            <button className="bg-indigo-600 text-white px-6 py-2 text-sm rounded-sm text-center" onClick={() => setShowOverlay(true)}>
              Add Quiz
            </button>
          </div>
        </div>
      )}

      {uploadedQuestions.length > 0 && (
        <div className="mx-auto container mt-6">
          <h2 className="text-xl font-semibold mb-3">Uploaded Questions:</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {uploadedQuestions.map((question) => (
              <div key={question.id} className="bg-white p-4 rounded-md shadow-md">
                <h3 className="text-lg font-semibold mb-2">{question.question}</h3>
                <ul>
                  {Object.entries(question.options).map(([key, value]) => (
                    <li key={key} className="ml-4">
                      <strong>{key}: </strong> {value}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {showOverlay && (
        <div className="overlay-wrapper">
          <div className="font-Jakarta absolute top-0 left-0 w-full h-full bg-white" style={{ zIndex: 9999 }}>
            {" "}
            {/* Mengatur z-index overlay */}
            <Navbar />
            <div className="flex justify-center mx-auto align-middle items-center container mt-7 gap-16 lg:gap-96 lg:mt-20 2xl:gap-[50rem]">
              <h1 className="text-xl font-semibold">English XI PPLG 1 - Quiz</h1>
              <div>
                <img src={Penicon} alt="Pen Icon" />
              </div>
            </div>
            <div className="flex justify-center mx-auto align-middle items-center container mt-20 gap-5 px-10 ml-3 2xl:px-0 2xl:ml-44 2xl:gap-28">
              <div className="flex flex-col space-y-4">
                <label htmlFor="deadline" className="text-gray-700 font-semibold text-xs 2xl:text-lg">
                  Deadline:
                </label>
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  placeholder="No Time Limit"
                  className="border border-gray-300 rounded-md p-4 w-full 2xl:w-[100%] 2xl:text-lg text-xs bg-neutral-200 text-black"
                  value={deadline}
                  onChange={handleDeadlineChange}
                />
              </div>
              <div className="flex flex-col space-y-4">
                <label htmlFor="timer" className="text-gray-700 font-semibold text-xs 2xl:text-lg">
                  Timer (minutes):
                </label>
                <input
                  type="number"
                  id="timer"
                  name="timer"
                  placeholder="No Time Limit"
                  min="1"
                  step="1"
                  className="border border-gray-300 rounded-md p-4 w-[83%] 2xl:w-[100%] 2xl:text-lg text-xs bg-neutral-200 text-black"
                  value={timer}
                  onChange={handleTimerChange}
                />
              </div>
            </div>
            {questions.map((questionId) => (
              <div id={`Soal${questionId}`} className="container mt-16 px-5 flex mx-auto items-center align-middle justify-center" key={questionId}>
                <div className="flex flex-col space-y-4">
                  <div className="relative flex items-center 2xl:w-full">
                    <h1 className="ml-2 mr-1 2xl:text-lg">{questionId}.</h1>
                    <input placeholder="Questions" type="text" id={`question${questionId}`} name={`question${questionId}`} className="rounded-md p-4 w-[83%] text-sm bg-white text-black 2xl:text-lg" />
                    <div className="absolute top-0 right-0 h-full flex items-center mr-3 ">
                      <label htmlFor={`image${questionId}`} className="cursor-pointer"></label>
                    </div>
                  </div>
                  <div className="flex flex-wrap ml-4 lg:ml-0">
                    <div className="flex flex-col space-y-4 items-start w-1/2 2xl:space-y-8">
                      <div className="flex space-x-4 items-center">
                        <input type="checkbox" id={`optionA${questionId}`} name={`answer${questionId}`} value="A" />
                        <input type="text" placeholder="A" className="border border-gray-300 bg-neutral-200 rounded-md p-2 w-[70%] text-sm lg:w-[100%] lg:h-12" />
                      </div>
                      <div className="flex space-x-4 items-center">
                        <input type="checkbox" id={`optionB${questionId}`} name={`answer${questionId}`} value="B" />
                        <input type="text" placeholder="B" className="border border-gray-300 bg-neutral-200 rounded-md p-2 w-[70%] text-sm lg:w-[95%] lg:h-12" />
                      </div>
                    </div>
                    <div className="flex flex-col space-y-4 items-start w-1/2 2xl:space-y-8">
                      <div className="flex space-x-4 items-center">
                        <input className="ml-2" type="checkbox" id={`optionC${questionId}`} name={`answer${questionId}`} value="C" />
                        <input type="text" placeholder="C" className="border border-gray-300 bg-neutral-200 rounded-md p-2 w-[70%] text-sm lg:w-[95%] lg:h-12" />
                      </div>
                      <div className="flex space-x-4 items-center">
                        <input className="ml-2" type="checkbox" id={`optionD${questionId}`} name={`answer${questionId}`} value="D" />
                        <input type="text" placeholder="D" className="border border-gray-300 bg-neutral-200 rounded-md p-2 w-[70%] text-sm lg:w-[95%] lg:h-12" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="ml-7 mt-10 lg:ml-72">
              <button onClick={handleAddQuestion} className="px-4 py-2 lg:px-10 lg:py-4 border-indigo-600 border-2 bg-white text-indigo-600 rounded-sm text-xs">
                Add Question
              </button>
            </div>
            <div className="float-right mr-7 mb-10">
              <button onClick={handleUploadQuiz} className="bg-indigo-600 text-white px-7 py-4 text-xs lg:px-12 lg:py-6 lg:mr-20">
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
