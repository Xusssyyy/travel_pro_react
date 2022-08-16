import * as actionTypes  from './constants'
import {gethotrecommendRequest } from '@/api/request'

export const changehotrecommendList = (data) => ({
    type:actionTypes.CHANGE_HOT_LIST,
    data
})

export const changeEnterLoading = (data) => ({
    type:actionTypes.CHANGE_ENTER_LOADING,
    data
})

export const gethotrecommendList = () => {
    return dispatch => {
        gethotrecommendRequest().then(data => {
            // const action = changeCitiesList(data.data)
            setTimeout(()=>{
                dispatch(changehotrecommendList(data))
                dispatch(changeEnterLoading(false))
            },1000)
        })
    }
}

