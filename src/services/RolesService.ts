import { LoginRequest } from "@/types/LoginRequest";
import httpClient from "./HttpClient";
import { _apiUrl } from "@/utils/constants";
import { User } from "next-auth";
import { Responsepetition } from "@/types/Responsepetition";

const prefix = "/roles";

export async function getAllRoles() {
  const response = await httpClient.get(prefix + "/");
  return response.data;
}

export async function createRole(values: any) {
  const response = await httpClient.post(prefix + "/", values);
  return response.data;
}

export async function updateRole(id: number, values: any) {
  const response = await httpClient.put(prefix, values);
  return response.data;
}

export async function deleteRole(id: number) {
  const response = await httpClient.delete(prefix + "/" + id);
  return response.data;
}
