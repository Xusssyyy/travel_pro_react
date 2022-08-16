import * as actionTypes  from './constants'
import {getcityRequest } from '@/api/request'

export const changecityList = (data) => ({
    type:actionTypes.CHANGE_CITY_LIST,
    data
})

export const getcityList = () => {
    return dispatch => {
        getcityRequest().then(data => {
            // const action = changeCitiesList(data.data)
            dispatch(changecityList(data))
        })
    }
}

