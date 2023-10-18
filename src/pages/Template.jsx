import React, { useState, useEffect } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen"
import UserQuestion from "./UserQuestion"
const Template = ({ buttonText = "Start", onClick }) => {
  const title = "My Quiz";
  const description = "Quiz Description";
  const startTime = "2023-10-14 09:00 PM";
  const endTime = "2023-10-13 10:00 PM";
  let [countdown, setCountdown] = useState("");
  let [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handle = useFullScreenHandle();
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown(findTimeDown());
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
      setIsButtonDisabled(true);
    };
  }, [startTime]);

  const findTimeDown = () => {
    const startTimestamp = +new Date(startTime);
    const currentTimestamp = +new Date();
    const timeRemaining = startTimestamp - currentTimestamp;
    if (timeRemaining > 0) {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
      const seconds = Math.floor((timeRemaining / 1000) % 60);
      return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }

  return (
    <div className="bg-gray-100 flex justify-center h-screen items-center">
      <div className="bg-gray-300 rounded-3xl p-8 shadow-2xl w-[30rem] m-5">
        <h1 className="block font-bold mb-4 text-3xl">{title}</h1>
        <p className="block font-semibold text-2xl">{description}</p>
        <h2>Start Time: {startTime}</h2>
        {countdown && <h2>Countdown: {countdown}</h2>}
        <h2>End Time: {endTime}</h2>
        <button
          className="mt-8 shadow-2xl bg-indigo-600 hover:bg-white hover:text-indigo-600 text-white font-bold py-2 px-4 rounded-xl focus:outline"
          onClick={isButtonDisabled ? null : onClick}
        // onClick={handle.enter}
        // disabled={isButtonDisabled}
        >
          {/* {isButtonDisabled ? `Starting in ${countdown}` : "Start Now!!"} */}
          Start Now!
        </button>
      </div>
      <FullScreen handle={handle} className="">
        <UserQuestion />

      </FullScreen>
    </div>
  );
};

export default Template;
