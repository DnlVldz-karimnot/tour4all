import httpClient, { httpFormDataClient } from "./HttpClient";

const prefix = "/s3";

export async function upload(file: any) {
  try {
    const response = await httpFormDataClient.post(prefix + "/", file);

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

export async function getImage(key: string) {
  try {
    const response = await httpClient.get(prefix + "/" + key);

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
