import axios from "axios"
import { notify } from "./fn";

const instance = axios.create({
  timeout: 15 * 1000,
})

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if(error.response.status !== 200) {
      const e = error?.response?.data
      if(e.hasOwnProperty("detail")) {
        notify(e.detail, 'error')
      } else {
        notify('Sorry. Some issue with the website scrapper. This event is logged and the team will look into this. Meanwhile, can you try the PDF chat option?', 'error')
      }
    }
    return Promise.reject(error.response)
  }
);

export default instance