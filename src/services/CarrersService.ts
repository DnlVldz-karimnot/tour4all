import httpClient from "./HttpClient";



const prefix = "/licenciatura"

export async function getAllCarrers() {
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

export async function createCarrer(values: any) {
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

export async function updateCarrer(id: number, values: any) {
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

export async function deleteCarrer(id: number) {
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