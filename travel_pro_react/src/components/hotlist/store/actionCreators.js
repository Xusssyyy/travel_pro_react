import * as actionTypes  from './constants'
import {gethotlistRequest } from '@/api/request'

export const changehotlistList = (data) => ({
    type:actionTypes.CHANGE_HOT,
    data
})

export const changeEnterLoading = (data) => ({
    type:actionTypes.CHANGE_ENTERLOADING,
    data
})

export const gethotlistList = () => {
    return dispatch => {
        gethotlistRequest().then(data => {
            // const action = changeCitiesList(data.data)
            setTimeout(()=>{
                dispatch(changehotlistList(data))
                dispatch(changeEnterLoading(false))
            },1000)
        })
    }
}

