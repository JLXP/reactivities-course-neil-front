import axios from "axios";
import { store } from "../stores/store";
import { toast } from "react-toastify";

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

const agent = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

agent.interceptors.request.use((config) => {
  store.uiStore.isBusy();
  return config;
});

agent.interceptors.response.use(
  async (response) => {
    await sleep(100);
    store.uiStore.isIdle();
    return response;
  },
  async (error) => {
    await sleep(100);
    store.uiStore.isIdle();
    
    const {status}= error.response;
    switch (status) {
      case 400:
        toast.error("Bad Request - 400");
        break;
      case 401:
        toast.error("Unauthorized - 401");
        break;
      case 403:
        toast.error("Forbidden - 403");
        break;
      case 404:
        toast.error("Not Found - 404");
        break;
      case 500:
        toast.error("Server Error - 500");
        break;
      default:
        toast.error("An unexpected error occurred");
    }
    return Promise.reject(error);
  }
);

export default agent;
