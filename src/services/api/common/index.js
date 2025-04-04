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
    return { data: [], isError: true, message };
  }
};
export const commonAPIs = async (method, url, data) => {
  const myJson = await apiCaller({ method, url, data });
  const resp = myJson?.data || myJson?.response?.data || {};

  if (resp && resp.succeeded) {
    const data = resp?.data ?? [];
    return { data, isError: false, message: "" };
  }
  if (resp && resp.message == "Cannot update your application while it is in review.") {
    return { data, isError: false, message: "" };
  } else {
    const message = resp?.message ?? "Something went wrong";
    return { data: [], isError: true, message };
  }
};
export const sponsorApis = async (method, url, data) => {
  const myJson = await apiCaller({ method, url, data });
  const resp = myJson?.data || myJson?.response?.data || {};

  if (resp && resp.succeeded) {
    const data = resp?.data ?? [];
    return { data, isError: false, message: "" };
  }
  if (resp && resp.message == "You do not have the rights to perform this action. Please contact admin support") {
    return { data, isError: false, message: "" };
  } else {
    const message = resp?.message ?? "Something went wrong";
    return { data: [], isError: true, message };
  }
};
