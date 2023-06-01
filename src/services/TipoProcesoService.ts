import httpClient from "./HttpClient";

const prefix = "/tipo-proceso";

export async function getAllTipoProceso() {
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

export async function createTipoProceso(values: any) {
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

export async function updateTipoProceso(id: number, values: any) {
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

export async function deleteTipoProceso(id: number) {
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
