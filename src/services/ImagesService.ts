import httpClient from "./HttpClient";
import { _apiUrl } from "@/utils/constants";
import { Responsepetition } from "@/types/Responsepetition";

const prefix = "/api/images";

export async function uploadImage(formData: any): Promise<Responsepetition> {
  try {
    const response = await httpClient.post(prefix + "/upload", formData);
    console.log("Entre imagen", response);
    return {
      state: true,
      data: response.data,
      error: "",
    };
  } catch (error) {
    console.log(error);
    return {
      state: false,
      data: [],
      error,
    };
  }
}
