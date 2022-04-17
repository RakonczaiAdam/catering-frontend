import axios from "axios";
import { url } from "./config";
import { refreshToken } from "./features/LoginPage/loginSlice";

export const get = async (path, config, dispatch)=>{
    console.log(url.DEV_API_URL+path)
    const request = await axios.get(url.DEV_API_URL+path, config).catch( async (error) =>{
        if(error.response?.data.errorType === "TokenExpiredError"){
            await dispatch(refreshToken())
            config.headers['authorization'] = `Bearer ${window.localStorage.getItem("accessToken")}`
            const requestAgain = await axios.get(url.DEV_API_URL+path, config)
            return requestAgain
        }
    })
    return request
}

export const post = async (path, config, dispatch)=>{
    console.log(url.DEV_API_URL+path)
    const request = await axios.post(
        url.DEV_API_URL+path, 
        config.body, 
        config
    ).catch( async (error) =>{
        if(error.response?.data.errorType === "TokenExpiredError"){
            await dispatch(refreshToken())
            config.headers['authorization'] = `Bearer ${window.localStorage.getItem("accessToken")}`
            const requestAgain = await axios.post(
                url.DEV_API_URL+path, 
                config.body, 
                config
            )
            return requestAgain
        }
    })
    return request
}

export const del = async (path, config, dispatch)=>{
    console.log(url.DEV_API_URL+path)
    const request = await axios.delete(url.DEV_API_URL+path, config).catch( async (error) =>{
        if(error.response?.data.errorType === "TokenExpiredError"){
            await dispatch(refreshToken())
            const requestAgain = await axios.delete(url.DEV_API_URL+path, config)
            return requestAgain
        }
    })
    return request
}

export const put = async (path, config, dispatch)=>{
    console.log(url.DEV_API_URL+path)
    const request = await axios.put(url.DEV_API_URL+path, config).catch( async (error) =>{
        if(error.response?.data.errorType === "TokenExpiredError"){
            await dispatch(refreshToken())
            const requestAgain = await axios.put(url.DEV_API_URL+path, config)
            return requestAgain
        }
    })
    return request
}

