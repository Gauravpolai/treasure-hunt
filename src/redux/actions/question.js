import axios from "axios";

// all user
export const getQuestionAdmin = (id) => async (dispatch) => {
  console.log(id);
  try {
    dispatch({
      type: "GetQuestionAdminRequest",
    });
    const { data } = await axios.get(
      `https://treasure-hunt-tcb7.onrender.com/api/v1/question/get-all-question/${id}`,
      {
        withCredentials: true,
      }
    );
    dispatch({
      type: "GetQuestionAdminSuccess",
      payload: data.questions,
    });
  } catch (error) {
    dispatch({
      type: "GetQuestionAdminFail",
      payload: error?.response?.data?.message,
    });
  }
};
