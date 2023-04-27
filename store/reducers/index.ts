import { combineReducers } from "@reduxjs/toolkit";
import authFlowSlice from "../slices/authFlow.slice";
import authSlice from "../slices/auth.slice";

export const rootReducer = combineReducers({
  auth: authSlice,
  authFlow: authFlowSlice,
});
