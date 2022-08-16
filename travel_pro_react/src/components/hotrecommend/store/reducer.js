import * as actionTypes from './constants.js'

const defaulState = {
    hotrecommendList: [],
    enterLoading: true
}

export default (state = defaulState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOT_LIST:
            return {
                ...state,
                hotrecommendList: action.data,
            }
        case actionTypes.CHANGE_ENTER_LOADING:
            return{
                ...state,
                enterLoading:action.data
            }
        default:
            return state
    }
}