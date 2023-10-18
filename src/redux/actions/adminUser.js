import axios from "axios";

// all user
export const getAllUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "AllUserRequest",
    });
    const { data } = await axios.get(
      `https://treasure-hunt-tcb7.onrender.com/api/v1/user/get-all-user`,
      {
        withCredentials: true,
      }
    );
    dispatch({
      type: "AllUserSuccess",
      payload: data.users,
    });
  } catch (error) {
    dispatch({
      type: "AllUserFail",
      payload: error?.response?.data?.message,
    });
  }
};