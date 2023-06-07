import { LoginRequest } from "@/types/LoginRequest";
import httpClient from "./HttpClient";
import { _apiUrl } from "@/utils/constants";
import { User } from "next-auth";
import { AxiosRequestHeaders } from "axios";

const prefix = "/user";

export async function getAllUsers() {
  try {
    const response = await httpClient.get(prefix + "/");

    return {
      state: true,
      data: response.data,
      error: "",
    };
  } catch (error) {
    return {
      state: false,
      data: [],
      error,
    };
  }
}

export async function createUser(values: any) {
  try {
    const response = await httpClient.post(prefix + "/", values);
    return {
      state: true,
      data: response,
      error: "",
    };
  } catch (error) {
    return {
      state: false,
      data: [],
      error,
    };
  }
}

export async function updateUser(id: number, values: any) {
  try {
    const response = await httpClient.put(prefix, values);
    return {
      state: true,
      data: response,
      error: "",
    };
  } catch (error) {
    return {
      state: false,
      data: [],
      error,
    };
  }
}

export async function deleteUser(id: number) {
  try {
    const response = await httpClient.delete(prefix + "/" + id);
    return {
      state: true,
      data: response,
      error: "",
    };
  } catch (error) {
    return {
      state: false,
      data: [],
      error,
    };
  }
}
