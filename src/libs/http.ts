import { baseUrl } from "../utils/config.js";
import axios from "axios";

export default function http(token?:string, contentType?:string) {
    return axios.create({
        baseURL: baseUrl,
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": contentType
            // Authorization: token && token.length > 0 && `Bearer ${token}`
        }
    })
}