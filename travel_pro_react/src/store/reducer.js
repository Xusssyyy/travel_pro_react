import { combineReducers } from "redux";

import { reducer as getcityReducer } from '@/pages/city/store/index'
import { reducer as gethotrecommendReducer } from '@/components/hotrecommend/store/index'
import { reducer as gethotlistReducer } from '@/components/hotlist/store/index'


export default combineReducers({
    getcity: getcityReducer,
    gethotrecommend: gethotrecommendReducer,
    gethotlist: gethotlistReducer
})