import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000/'
})
const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        console.log('request stopped by interceptors', token);
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
     function (error) {
        // Do something with request error
        return Promise.reject(error);
    });
    axios.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      }, async(error) => {
        const status = error.response.status;
        if(status === 401 || status === 403){
            await logOut()
            navigate('/login')
        }
         
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      });
      return [axiosSecure];
}
export default useAxiosSecure;