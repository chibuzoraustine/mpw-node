import axios from "axios";

export default function http(base_url, token) {
    return axios.create({
        baseURL: base_url,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}