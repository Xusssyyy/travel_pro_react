import { axiosInstance } from "./config";

import {
    URL_GETCITY,
    URL_GETHOTRECOMMEND,
    URL_GETHOTLIST
} from './url'

export const getcityRequest = () => axiosInstance.get(URL_GETCITY)  
export const gethotrecommendRequest = () => axiosInstance.get(URL_GETHOTRECOMMEND)  
export const gethotlistRequest = () => axiosInstance.get(URL_GETHOTLIST)  
