import axios from "axios";


const baseUrl = import.meta.env.VITE_BASE_URL;

export function sendOTP(email){
    return axios.get(baseUrl + "customers/" + email + "/login")
        .then(res => {
            if(res.status === 200) return res.data;

            console.log("get error response!!");
            console.log(res.status, res.statusText, res.data);
            return null;
        })
}

export function checkOTP(email, number){
    return axios.post(baseUrl + "customers/" + email + "/login", {email : email, password : number})
        .then(res => {
            if(res.status === 200) return res.data;

            console.log("get error response!!");
            console.log(res.status, res.statusText, res.data);
            return null;
        })
}
