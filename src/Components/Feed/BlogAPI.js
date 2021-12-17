import axios from "axios";
import {API} from "../Constants";

export const Search = () => {
    const promise = axios.post(API + "/Search", null);
    return promise.then((response) => response.data).catch(() => Promise.reject());
}

export const GetBlog = (ID) => {
    const promise = axios.get(API + "/Blog/" + ID);
    return promise.then((response) => response.data).catch(() => Promise.reject());
}