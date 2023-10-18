import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function QuizStart({ value = true }) {
  const navigate = useNavigate();
  const [isFullScreen, setIsFullScreen] = useState(value);
  const [isAcknowledged, setIsAcknowledged] = useState(false);

  const toggleFullScreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    }
    setIsFullScreen(true);
  };

  const handleAcknowledgmentChange = () => {
    setIsAcknowledged(!isAcknowledged);
  };

  const name = "Yash";

  return (
    <div mt-0>
      <header className="bg-indigo-600 p-3 flex justify-between items-center overflow-hidden">
        <div className="flex items-center">
          <img
            src="assests/NITM.png"
            alt="Logo"
            className="w-9 h-9 mr-2 
        "
          />{" "}
          {/* Adjust the width and height as needed */}
          <div className="text-black text-lg md:text-2xl">Hi, {name}</div>
        </div>
        <div className="text-black text-base rounded-full bg-gray-300 w-12 h-12 flex items-center justify-center md:text-xl">
          <span>{name.slice(0, 1).toUpperCase()}</span>
        </div>
      </header>
      <div className="bg-gray-300 flex justify-center items-center min-h-screen">
        <div className="w-[40rem] m-4">
          <h1 className=" mt-4 text-3xl font-bold text-transform: uppercase flex justify-center mb-4">
            Treasure Hunt Quiz
          </h1>
          <img
            src="https://images.unsplash.com/photo-1516417156595-3ca5df62a3a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
            alt="random img"
            className="w-[40rem]  rounded-2xl shadow-md mb-2"
          />
          <p className="mt-4 text-gray-700 text-lg text-semibold tracking-tight">
            The sun dipped borld seemed to slow down, allowing its residents to
            savor the magic of twilight The sun dipped borld seemed to slow
            down, allowing its residents to savor the magic of twilightThe sun
            dipped borld seemed to slow down, allowing its residents to savor
            the magic of twilightThe sun dipped borld seemed to slow down,
            allowing its residents to savor the magic of twilightThe sun dipped
            borld seemed to slow down, allowing its residents to savor the magic
            of twilight
          </p>
          <h1 className=" mt-5 text-2xl font-bold text-transform: uppercase">
            Rules
          </h1>

          <ol className="text-gray-700">
            <li>1. Only individual participation is permitted.</li>
            <li>2. Registration for the event is entirely free of charge</li>
            <li>
              3. Participants must arrive at the event venue at least 10 minutes
              prior to the scheduled start time.
            </li>
            <li>
              4. It is mandatory for participants to bring their own laptops and
              chargers
            </li>
            <li>
              5. Participants are not permitted to leave the event venue during
              the competition
            </li>
            <li>
              6. The use of multiple browser tabs or windows is strictly
              prohibited during the event.
            </li>
            <li>
              7. Mobile phones are strictly prohibited for any purpose during
              the competition
            </li>
            <li>
              8. Participants encountering challenges may opt to request hints.
            </li>
            <li>
              9. Assistance from any external sources or individuals is strictly
              prohibited during the competition.
            </li>
          </ol>
          <div className="flex justify-between items-center">
            <label>
              <input
                type="checkbox"
                checked={isAcknowledged}
                onChange={handleAcknowledgmentChange}
                className="text-lg font-semibold mr-3 text-gray-700"
              />
              I acknowledge the rules and conditions.
            </label>
            <button
              className="mt-5 mb-3 shadow-2xl bg-indigo-600 hover:bg-white hover:text-indigo-600 text-white font-bold py-2 px-4 rounded-xl focus:outline"
              onClick={() => {
                toggleFullScreen();
                navigate("/user");
              }}
              disabled={!isAcknowledged}
            >
              Start Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizStart;
