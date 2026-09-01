import axiosInstance from "@/app/lib/axios";
import { getAccessToken, setAccessToken } from "./tokens";
import { redirect } from "next/navigation";
import { ENDPOINTS } from "../endpoints/login/login";

export async function loginUser(email:FormDataEntryValue | null, password:FormDataEntryValue | null) {
          axiosInstance.get('/sanctum/csrf-cookie', { baseURL: "http://localhost:8000" });
                 await axiosInstance.post(ENDPOINTS.LOGIN, {
                    email: email,
                    password: password,
                    device_name: "brave-browser",
                }).then((response) => {
                    console.log(response, "login user");
                    if(response.data.access_token) {
                        setAccessToken(response.data.access_token);
                    }
                }).catch((error) => {
                    console.error(error, "unauthorized");
                })

       const accessToken = getAccessToken();
       if(accessToken) {
        redirect("/dashboard");
       }
}

async function login(){

          
            
}
// try{
//       axiosInstance.post("/login", {
//                     email: email,
//                     password: password,
//                     device_name: "brave-browser",
//                 }).then((response) => { 
//                     console.log(response, "login user");
//                     if(response.data.access_token) {
//                         setAccessToken(response.data.access_token);
//                         redirect("/dashboard");
//                     }
//                 }).catch((error) => {
//                     console.error(error, "error logging in user");
//                 })
// } 
// catch (error) {
//     console.error(error, 'error getting token');
// }
// }
        // try {
        //     axiosInstance.get('/sanctum/csrf-cookie', { baseURL: "http://localhost:8000" }).then(response => {
        //         axiosInstance.post("/login", {
        //             email: email,
        //             password: password,
        //             device_name: "brave-browser",
        //         }).then((response) => {
        //             console.log(response, "login user")
                   
        //             // if (response.data.access_token) {
        //             //     // setAccessToken(response.data.access_token);
        //             //     redirect("/dashboard");
                    
        //             // }
        //             // console.log(response, "login user")
        //         }).catch((error) => {
        //             console.error(error, "error logging in user");
        //         });
        //     }).catch((error) => {
        //         console.error(error, "error getting csrf cookie")
        //     })
        // }
        // catch (error) {
        //     console.error(error, 'error getting token');
        // }
    
    // }