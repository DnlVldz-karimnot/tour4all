import httpClient from "./HttpClient";

const prefix = "/proceso";

export async function getAllProcesos() {
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

export async function getProceso(id: string) {
  try {
    const response = await httpClient.get(prefix + "/" + id);

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

export async function getAllByType(type: string) {
  try {
    const response = await httpClient.get(prefix + "/find-by-type/" + type);

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

export async function createProceso(values: any) {
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

export async function addProcesoInterno(id: number, values: any) {
  try {
    const response = await httpClient.post(
      prefix + "/add-proceso-interno/" + id,
      values
    );
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

export async function updateProceso(id: number, values: any) {
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

export async function deleteProceso(id: number) {
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
