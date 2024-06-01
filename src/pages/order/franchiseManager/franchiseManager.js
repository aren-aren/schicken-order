import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const franchiseManager = {
    getFranchises(){
      return axios.get(baseUrl + "franchises")
          .then(res => {
              if(res.status === 200) return res.data;

              console.log("get error response!!");
              console.log(res.status, res.statusText, res.data);
              return null;
          })
    },
}
