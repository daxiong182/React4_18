// 该文件专门用于暴露一个store对象 整个应用只有一个store对象

//引入createStore 用于创建redux中最核心的store对象
import {createStore,applyMiddleware} from 'redux'

//引入redux-thunk,用于支持action
import thunk from 'redux-thunk'

//引入汇总后的allReducer
import allReducer  from './reducers'


//引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'




//暴露store applyMiddleWare
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))








