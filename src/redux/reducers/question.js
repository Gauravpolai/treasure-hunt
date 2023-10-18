import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    loader: true,
};

export const adminQuestionReducer = createReducer(initialState, {
GetQuestionAdminRequest: (state) => {
    state.loader = true;
  },
  GetQuestionAdminSuccess: (state, action) => {
    state.loader = false;
    state.allQuestion = action.payload;
  },
  GetQuestionAdminFail: (state, action) => {
    state.loader = false;
    state.error = action.payload;
  },
  
  clearErrors: (state) => {
    state.error = null;
  },
  clearMessages: (state) => {
    state.successMessage = null;
  },
});