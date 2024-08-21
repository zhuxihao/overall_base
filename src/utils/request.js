import axios from "axios";
import { decrypt } from "./crypto";

const request = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000,
    timeoutErrorMessage: '当前网络较慢，请稍后再试'
})

request.interceptors.request.use((options) => {

    console.log('请求拦截器执行了', options)

    const Authorization = localStorage.getItem('USER_TOKEN') || ''

    const headers = {
        ...(options.headers || {}),
        Authorization,
    }

    return {
        ...options,
        headers,
    }

}, (err) => {
    return Promise.reject(err)
})

request.interceptors.response.use((options) => {
    const { data } = options
    const { data: scrData, ...rest } = data
    const deData =  JSON.parse(decrypt(scrData))
    const resData = {
        ...rest,
        data:deData
    }
    console.log(deData)
    if(deData.indexOf('bearer') !== -1){
        localStorage.setItem('USER_TOKEN', deData)
    }
    return(resData)
}, (err) => {

})

export default request