import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
import {quizReducer} from "./reducers/quiz"
import {adminUserReducer} from "./reducers/adminUser"
import { adminQuestionReducer } from "./reducers/question";

const Store = configureStore({
  reducer: {
    user: userReducer,
    quiz: quizReducer,
    adminUser: adminUserReducer,
    question: adminQuestionReducer
  },
});

export default Store;