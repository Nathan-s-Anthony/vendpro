import axiosInstance from "@/app/lib/axios";
import { redirect } from "next/navigation";
import { ENDPOINTS } from "@/app/api/endpoints/login/login";
import { createSession } from "@/app/lib/session";
export async function loginUser(
    email: FormDataEntryValue | null,
    password: FormDataEntryValue | null
) {
    try {
        await axiosInstance.get(ENDPOINTS.COOKIES.CSRF, {
            baseURL: "http://localhost:8000",
        });
        const response = await axiosInstance.post(ENDPOINTS.user.LOGIN, {
            email,
            password,
            device_name: "brave-browser",
        });
        const accessToken = response.data.access_token;
        console.log("Access token:", accessToken);
        if (!accessToken) {
            console.error("No access token returned");
            return;
        }
        await createSession(accessToken);
    } catch (error) {
        console.error(error, "Login failed");
    }
   redirect("/dashboard");
}
// export async function loginUser(email:FormDataEntryValue | null, password:FormDataEntryValue | null) {
//           axiosInstance.get('/sanctum/csrf-cookie', { baseURL: "http://localhost:8000" });
//                  await axiosInstance.post(ENDPOINTS.LOGIN, {
//                     email: email,
//                     password: password,
//                     device_name: "brave-browser",
//                 }).then((response) => {
//                     console.log(response, "login user");

//                 }).catch((error) => {
//                     console.error(error, "unauthorized");
//                 })
//                 //   const accessToken = getAccessToken() as string ;
//                 //   if(accessToken) {
//                 //   await createSession(accessToken);
//                 //   redirect('/dashboard');
//                 //   }
              

//   // 5. Redirect user

//     //    const accessToken = getAccessToken();
//     //    if(accessToken) {
//     //     redirect("/dashboard");
//     //    }
// }


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