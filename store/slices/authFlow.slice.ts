import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { AsyncDeleteItem } from "../../utils";

export interface IAuthFlow {
  signedIn: boolean;
  isLoading: boolean;
}

const initialState: IAuthFlow = {
  signedIn: false,
  isLoading: true,
};

const authFlowSlice = createSlice({
  name: "authFlow",
  initialState,
  reducers: {
    authRequest: (state) => ({ ...state, isLoading: true }),
    login: (state) => ({ ...state, isLoading: false, signedIn: true }),
    logOut: (state) => {
      try {
        AsyncDeleteItem("user");
        AsyncDeleteItem("token");
      } catch (error) {
        console.error(error)
      }
      return { ...state, signedIn: false, isLoading: false };
    },
  },
});

export const { login, logOut } = authFlowSlice.actions;
export const authFlowSelector = (state: RootState) => state.authFlow;
export default authFlowSlice.reducer;
