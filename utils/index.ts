import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, Platform, ToastAndroid } from "react-native";

const http = axios.create({
  baseURL: "https://dummyjson.com",
});

http.interceptors.request.use(async (config) => {
  const token = await AsyncGetItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { http };

export async function AsyncSaveItem(key: string, value: any) {
  return await AsyncStorage.setItem(key, JSON.stringify(value));
}

export async function getToken() {
  return await AsyncGetItem("token");
}

export async function AsyncGetItem(key: string) {
  const item = await AsyncStorage.getItem(key);
  return JSON.parse("" + item);
}
export async function AsyncDeleteItem(key: string) {
  return await AsyncStorage.removeItem(key);
}

export const validationError = (message: string) => {
  Platform.OS === "android"
    ? ToastAndroid.show(message, ToastAndroid.SHORT)
    : Alert.alert("Error ⚠️", message);
  return;
};
