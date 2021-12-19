import axios from "axios";
import {API} from "../Constants";

export const Search = (props) => {
    console.log(props);
    const promise = axios.post(API + "/Blog/Search", props);
    return promise.then((response) => response.data).catch(() => Promise.reject());
}

export const GetBlog = (ID) => {
    const promise = axios.get(API + "/Blog/Get/" + ID);
    return promise.then((response) => response.data).catch(() => Promise.reject());
}

export const UploadBlog = (Blog) => {
    const promise = axios.post(API + "/Blog/Upload", Blog);
    return promise.then((response) => response.data).catch((error) => Promise.reject(error));
}