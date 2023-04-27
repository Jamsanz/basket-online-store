import { AxiosError } from "axios";
import { Dispatch } from "react";
import { Alert } from "react-native";
import { IAuth } from "../../interfaces/user.interface";
import { AsyncSaveItem, http } from "../../utils";
import {
  authenticate,
  authenticated,
  authenticationError,
} from "../slices/auth.slice";
import { login } from "../slices/authFlow.slice";

export const authController =
  (auth: IAuth) => async (dispatch: Dispatch<any>) => {
    if (auth.username === "" || auth.password === "") {
      dispatch(authenticationError("please fill fields"));
      return;
    }

    dispatch(authenticate());

    try {
      const response = await http.post("/auth/login", auth);
      dispatch(authenticated(response.data));
      AsyncSaveItem("token", response.data.token);
      AsyncSaveItem("user", response.data);
      dispatch(login());
    } catch (error) {
      dispatch(
        authenticationError(
          ((error as AxiosError).response?.data as any).message
        )
      );
      Alert.alert(
        "Error",
        ((error as AxiosError).response?.data as any).message
      );
      console.log(((error as AxiosError).response?.data as any).message);
    }
  };
