import { LoginRequest } from "@/types/LoginRequest";
import httpClient from "./HttpClient";
import { _apiUrl } from "@/utils/constants";

const prefix = "auth";

export async function loginAuth(values: LoginRequest) {
  const response = await httpClient.post(prefix + "/login", values);
  return response.data;
}

export async function registerPublicAuth(values: LoginRequest) {
  const response = await httpClient.post(prefix + "/register-public", values);
  return response.data;
}
