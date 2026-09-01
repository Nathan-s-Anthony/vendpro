import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";


// const apiToken: AxiosInstance = axios.create({
//     baseURL: "http://localhost:8000",
//     timeout: 5000,
//     withCredentials: true,
//     withXSRFToken:true,
// });
export const csrfCookie = axios.create({ baseURL: "http://localhost:8000" });
export const restApi = axios.create({ baseURL: "http://localhost:8000/api" });
// apiToken.interceptors.request.use((config) => {
// // // const token =getToken();
// // //   if (token) {
// // //     config.headers.set("Authorization", `Bearer ${token}`);
// // //   }
 
//   return config;
// });
 
// apiToken.interceptors.request.use((config: InternalAxiosRequestConfig) => {
//   config.headers.set("Authorization", `Bearer ${getToken()}`);
//   return config;
// });
// apiToken.interceptors.response.use(
//   (response: AxiosResponse) => response,
//   (error) => Promise.reject(error)
// );

// async function getToken(): Promise<string> {
//     const response = await csrfCookie.get("/sanctum/csrf-cookie").then(() => {
//         console.log("CSRF cookie set...");
//         return restApi.post("/login", {
//             email: "nsanthony95@gmail.com",
//             token_name: "login-user",
//         });
//     });
//     return response.data.token;
// }
//     const csrfResponse = await csrfCookie.get("/sanctum/csrf-cookie").then((response)=>{
    // const response = await restApi.post("/login", {
    //     email: "nsanthony95@gmail.com",
    //     token_name: "login-user",
    // });
//     })

   
//    const apiToken = response.data.token;
//   return apiToken;

//   githubApi.get('/sanctum/csrf-cookie').then(response => {
//   console.log(response,"response");
//   githubAppi.post('/login',{email:"nsanthony95@gmail.com",token_name:"login-user"}).then(response => {
//     console.log(response.data.token,"response from login");
//     const token = response.data.token;
//   return token;
//      })
//  return response;
// axios.post('http://localhost:8000/api/login').then(response =>{
//     // //   redirect("/dashboard")
    // console.log(response.data,"response coming ");
    // }).catch((error)=>{
    //     console.log(error);
    // })
//     }).catch((error)=>{
//         console.log(error)
//     });
// }

// export{
//     getToken
// }