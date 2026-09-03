"use server";
import "server-only";

import { axiosInstance } from "@/app/lib/axios";
import { ENDPOINTS } from "../endpoints/main";

export async function getSEO(companyID: number) {
    // try {
    //     const resp = axiosInstance.get(ENDPOINTS.COMPANY.SEO(companyID));
    //     console.log(resp, "response for company seo....")

    // } catch (error) {
    //     console.error(error, "error fetching seo....")
    // }
}