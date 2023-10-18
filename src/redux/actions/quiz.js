import axios from "axios";
import { toast } from "react-hot-toast";

// get all quiz
export const getAllQuiz = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllQuizRequest",
    });

    const { data } = await axios.get(
      `https://treasure-hunt-tcb7.onrender.com/api/v1/quiz/get-all-quiz`,
      {
        withCredentials: true,
      }
    );
    dispatch({
      type: "getAllQuizSuccess",
      payload: data.quiz,
    });
  } catch (error) {
    dispatch({
      type: "getAllQuizFailed",
      payload: error.response.data.message,
    });
  }
};

// get all quiz
export const getOneQuiz = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getOneQuizRequest",
    });

    const { data } = await axios.get(
      `https://treasure-hunt-tcb7.onrender.com/api/v1/quiz/get-quiz/${id}`,
      {
        withCredentials: true,
      }
    );
    dispatch({
      type: "getOneQuizSuccess",
      payload: data.quiz,
    });
  } catch (error) {
    dispatch({
      type: "getOneQuizFailed",
      payload: error.response.data.message,
    });
  }
};

// get all quiz
export const registerQuiz = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "registerQuizRequest",
    });

    const { data } = await axios.post(
      `https://treasure-hunt-tcb7.onrender.com/api/v1/register/register-user-to-quiz/${id}`,
      {},
      {
        withCredentials: true,
      }
    );
    toast.success("Register Successfully!");
    dispatch({
      type: "registerQuizSuccess",
      payload: data.quiz,
    });
  } catch (error) {
    dispatch({
      type: "registerQuizFailed",
      payload: error.response.data.message,
    });
  }
};
