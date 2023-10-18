import React, { useState, useEffect } from "react";

import Header from "./Header";
const UserQuestion = () => {
  const questions = [
    // Questions array remains the same
    {
      question: "What is the capital of France?",
      options: ["Berlin", "London", "Paris", "Madrid"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [timer, setTimer] = useState(100);

  // useEffect(() => {
  //   const unloadCallback = (event) => {
  //     event.preventDefault();
  //     event.returnValue = "";
  //     return "";
  //   };

  //   window.addEventListener("beforeunload", unloadCallback);
  //   return () => window.removeEventListener("beforeunload", unloadCallback);
  // }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    // if (selectedOption === questions[currentQuestion].correctAnswer) {
    //   // Handle correct answer, e.g., increment score
    // }
    setSelectedOption("");
    setTimer(100);
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };
  // const name = "Yash";
  return (
    <div className="flex justify-center align-center flex-col">
      <Header />
      {/* <div className="min-h-screen flex justify-center"> */}
      <div>

      </div>
      <div className="self-center bg-slate-50  border border-gray-100 shadow-lg mx-5 p-4 rounded-xl mt-24 sm:mt-204 sm:px-14 md:w-[65%]">
        <div className="flex flex-col  sm:flex-row sm:justify-between sm:items-center">
          <h1 className=" font-bold mb-1 rounded-3xl text-2xl md:tex-3xl">
            Question {currentQuestion + 1}
          </h1>
        </div>
        <p className="mb-4 text-xl sm:text-2xl mt-3">
          {questions[currentQuestion].question}
        </p>
        {/* <ul className="list-disc pl-4 mb-8 text-lg"> */}
        {questions[currentQuestion].options.map((option, index) => (
          // <li key={index}>
          <label
            className="block text-gray-700 font-bold border-2 rounded-lg py-3 px-3 my-4"
            key={index}
          >
            <input
              type="radio"
              name="options"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionSelect(option)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
        <div className="flex justify-end">

        <button
          onClick={handleNextQuestion}
          className="shadow-2xl bg-indigo-600 hover:bg-white hover:text-indigo-600 text-white font-bold py-3 px-7 rounded-xl hover:outline "
          >
          Next
        </button>
        </div>
      </div>
    </div>
  );
};

export default UserQuestion;
