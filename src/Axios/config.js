import Axios from "axios";
 
 const blogFetch = Axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type": "application/json",
    },
 });

 export default blogFetch;