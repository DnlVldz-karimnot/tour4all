import httpClient from "./HttpClient";

const prefix = "/advertisement";

export async function getAllAdvertisement() {
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

export async function createAdvertisement(values: any) {
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

export async function updateAdvertisement(id: number, values: any) {
  try {
    const response = await httpClient.patch(prefix + "/" + id, values);
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

export async function deleteAdvertisement(id: number) {
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
