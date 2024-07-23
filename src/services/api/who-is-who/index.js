import { apiCaller } from "../../middleware/api-caller";

export const WhoIsWhoAPI = async (method, url, data) => {
    const myJson = await apiCaller({ method, url, data });
    const resp = myJson.data ?? {};
    if (resp && resp.succeeded) {
      const data = resp?.data ?? [];
      return { data, isError: false, message: "" };
    } else {
      const message = resp?.message ?? "Something went wrong";
      return { data: [], isError: true, message };
    }
  };