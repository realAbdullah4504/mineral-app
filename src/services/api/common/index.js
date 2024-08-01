import { apiCaller } from "../../middleware/api-caller";

export const testApplicationDetailAPI = async (method, url, data) => {
  const myJson = await apiCaller({ method, url, data });
  const resp = myJson?.data || myJson?.response?.data || {};
  if (resp && resp.succeeded) {
    const data = resp?.data ?? [];
    return { data, isError: false, message: "" };
  } else {
    const message = resp?.message ?? "Something went wrong";
    return { data: [], isError: true, message };
  }
};
export const saveSampleListingAPI = async (method, url) => {
  const myJson = await apiCaller({ method, url });
  const resp = myJson?.data || myJson?.response?.data || {};
  if (resp && resp.succeeded) {
    const data = resp?.data ?? [];
    return { data, isError: false, message: "" };
  } else {
    const message = resp?.message ?? "Something went wrong";
    return { data: [], isError: true, message };
  }
};

export const saveSampleDetailAPI = async (method, url, data) => {
  const myJson = await apiCaller({ method, url, data });
  const resp = myJson?.data || myJson?.response?.data || {};
  if (resp && resp.succeeded) {
    const data = resp?.data ?? [];
    return { data, isError: false, message: "" };
  } else {
    const message = resp?.message ?? "Something went wrong";
    console.log(resp, "resperror");
    return { data: [], isError: true, message };
  }
};
export const commonAPIs = async (method, url, data) => {
  const myJson = await apiCaller({ method, url, data });
  const resp = myJson?.data || myJson?.response?.data || {};
  if (resp && resp.succeeded) {
    const data = resp?.data ?? [];
    return { data, isError: false, message: "" };
  } else {
    const message = resp?.message ?? "Something went wrong";
    return { data: [], isError: true, message };
  }
};
