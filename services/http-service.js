import axios from "axios";

export function http(base_url, token) {
    return axios.create({
        baseURL: base_url,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}