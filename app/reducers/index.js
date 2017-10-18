import { combineReducers } from 'redux'

import userinfo from './userinfo'

const rootReducer = combineReducers({
    userinfo
    // 这里等同于userinfo:userinfo
})

export default rootReducer