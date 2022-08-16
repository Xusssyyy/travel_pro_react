import * as actionTypes from './constants.js'

const defaulState = {
    hotList: [],
    enterLoading: true
}

export default (state = defaulState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOT:
            return {
                ...state,
                hotList: action.data,
            }
        case actionTypes.CHANGE_ENTERLOADING:
            return{
                ...state,
                enterLoading:action.data
            }
        default:
            return state
    }
}