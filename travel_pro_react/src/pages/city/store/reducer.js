import * as actionTypes from './constants.js'

const defaulState = {
    cityList: [],
   
}

export default (state = defaulState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_CITY_LIST:
            return {
                ...state,
                cityList: action.data,
            }
        default:
            return state
    }
}