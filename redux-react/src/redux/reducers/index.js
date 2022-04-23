//该文件用于汇总所有的reducer为一个总的reducer

//引入为Count组件服务的reducer
import count from '../reducers/count'

//引入为Person组件服务的reducer
import persons from '../reducers/person'

import { combineReducers } from 'redux'

//汇总所有的reducer变为一个总的reducer
const allReducer=combineReducers({
    count,
    persons
})



export default allReducer