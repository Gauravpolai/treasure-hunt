import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    isLoadingUser: true,
};

export const adminUserReducer = createReducer(initialState, {
  AllUserRequest: (state) => {
    state.isLoadingUser = true;
  },
  AllUserSuccess: (state, action) => {
    state.isLoadingUser = false;
    state.allUser = action.payload;
  },
  AllUserFail: (state, action) => {
    state.isLoadingUser = false;
    state.error = action.payload;
  },
  
  clearErrors: (state) => {
    state.error = null;
  },
  clearMessages: (state) => {
    state.successMessage = null;
  },
});