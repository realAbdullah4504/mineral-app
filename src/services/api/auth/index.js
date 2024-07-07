import { apiCaller } from "../../middleware/api-caller";

export const loginAPI = async (method, url, data) => {
    const myJson = await apiCaller({ method, url, data });
    const resp = myJson.data ?? {};
    if (resp && (resp.statusCode == "200" || resp.statusCode == "201")) {
      const data = resp?.data ?? [];
      return { accessToken: data, isError: false, message: "" };
    } else {
      const message = resp?.message ?? "Something went wrong";
      return { data: [], isError: true, message };
    }
  };