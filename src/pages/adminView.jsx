import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { GrAddCircle } from "react-icons/gr";
import { toast } from 'react-hot-toast'
import axios from 'axios'

const AdminView = (props)=> {
  const navigate = useNavigate();
  const handlePublish = async (e) => {
    e.preventDefault();
    console.log(1)
    try {

      await axios.put(`https://treasure-hunt-tcb7.onrender.com/api/v1/quiz/publish/${props.data._id}`, {}, {
        withCredentials: true
      });
      if (props.data.published) {
        toast.success('Quiz Unpublished!')
      } else {
        toast.success('Quiz Published!')
      }

      navigate('/dashboard')
    } catch (error) {
      console.log(error)
    }
  }

  function formatDate(date) {
    const formattedDate = new Intl.DateTimeFormat("en-GB", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(date));

    return formattedDate;
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className="self-end mr-4 md:mr-[5rem] rounded-full ">
        {
          !props.data.published ? (
            <button
              className="mt-0 mb-1 text-sm shadow-2xl bg-green-600 hover:bg-white hover:text-green-600 text-white font-bold
            hover:border-2 hover:border-green-600 py-2 px-2 rounded-xl focus:outline md:py-2 md:px-4 md:rounded-xl md:shadow-2xl md:mt-5 md:text-base md:mb-3"
              onClick={handlePublish}
            >
              Publish
            </button>
          ) : (
            <button
              className="mt-0 mb-1 text-sm shadow-2xl bg-[crimson] hover:bg-white hover:text-[crimson] text-white font-bold
            hover:border-2 hover:border-[crimson] py-2 px-2 rounded-xl focus:outline md:py-2 md:px-4 md:rounded-xl md:shadow-2xl md:mt-5 md:text-base md:mb-3"
              onClick={handlePublish}
            >
              UnPublish
            </button>
          )
        }
      </div>
      <div className="bg-white flex justify-center items-center w-[100%] md:w-[40rem]">
        <div className=" m-4">
          <h1 className=" mt-4 text-xl font-bold text-transform: uppercase flex justify-center mb-4 md:text-3xl">
            {props.data.name}
          </h1>
          <img
            src={props.data.image.url}
            alt="random img"
            className="w-[20rem] md:w-[40rem] md:mb-2 md:rounded-2xl shadow-md "
          />
          <p className="mt-2 text-gray-700 text-sm text-semibold tracking-tight mb-2 md:text-lg md:text-semibold md:mt-4">
            {props.data.description}
          </p>
          <p className="mt-2 text-black text-sm text-semibold  mb-2 md:text-lg md:text-bold md:mt-4">
            <span className="md:text-bold">Start Time:</span>
            {formatDate(props.data.startTime)}
          </p>
          <p className="mt-2 text-black text-sm text-semibold mb-2 md:text-base md: text-semibold md:mt-4">
            End Time: {formatDate(props.data.endTime)}
          </p>
          <div className="flex flex-col justify-evenly mx-10  md:flex-row">
            <button
              className="mt-2 mb-2 text-sm shadow-2xl bg-yellow-400 hover:bg-white py-2 px-2 hover:text-yellow-400 text-white 
          hover:border-2 hover:border-yellow-400 font-bold rounded-xl md:text-base focus:outline md:py-2 md:px-4 md:rounded-xl md:shadow-2xl md:mt-5  md:mb-3 "
              onClick={() => { }}
            >
              Edit Quiz
            </button>
            <button
              className="mt-2 mb-2 text-sm shadow-2xl bg-red-600 hover:bg-white hover:text-red-600 py-2 px-2
          hover:border-2 hover:border-red-600 text-white font-bold rounded-xl md:py-2 md:px-4 md-rounded-xl md:shadow md:mt-5 md:mb-3 md:text-base"
              onClick={() => { }}
            >
              Delete Quiz
            </button>
            <button
              className="mt-2 mb-2 text-sm shadow-2xl bg-indigo-600 hover:bg-white hover:text-indigo-600 text-white font-bold
            hover:border-2 hover:border-indigo-600 py-2 px-2 rounded-xl focus:outline md:py-2 md:px-4 md:rounded-xl md:shadow-2xl md:mt-5 md:text-base md:mb-3"
              onClick={() => {
                navigate(`/quiz/${props.id}/admin-view-question`);
              }}
            >
              Questions
            </button>
            <button
              className="mt-2 mb-2 text-sm shadow-2xl bg-indigo-600 hover:bg-white hover:text-indigo-600 text-white font-bold
            hover:border-2 hover:border-indigo-600 py-2 px-2 rounded-xl focus:outline md:py-2 md:px-4 md:rounded-xl md:shadow-2xl md:mt-5 md:text-base md:mb-3"
              onClick={() => {
                navigate(`/quiz/${props.id}/admin-view-users`);
              }}
            >
              Users
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminView;
