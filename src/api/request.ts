
import axios, { AxiosResponse } from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "content-type": "application/json; charset=utf8",
  },
});

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response?.data?.payload) {
      return response.data.payload;
    }

    if (response?.data) {
      return response.data;
    }

    return response;
  },
  async (error) => {
    console.log("ERRRRRRRRRRRRRRRRRR", error);

    throw error;
  }
);



export const fetcher = (url :string) =>
  axiosClient.get(url).then((res: any) => {    
    return res;
  });



export default axiosClient;
