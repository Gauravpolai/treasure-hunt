import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const quizReducer = createReducer(initialState, {
  // get all quiz
  getAllQuizRequest: (state) => {
    state.isLoading = true;
  },
  getAllQuizSuccess: (state, action) => {
    state.isLoading = false;
    state.allQuiz = action.payload;
  },
  getAllQuizFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get all quiz
  getOneQuizRequest: (state) => {
    state.isLoading = true;
  },
  getOneQuizSuccess: (state, action) => {
    state.isLoading = false;
    state.quiz = action.payload;
  },
  getOneQuizFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // register quiz
  registerQuizRequest: (state) => {
    state.isLoading = true;
  },
  registerQuizSuccess: (state, action) => {
    state.isLoading = false;
    state.allQuiz = action.payload;
  },
  registerQuizFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  clearErrors: (state) => {
    state.error = null;
  },
});
