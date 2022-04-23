//该文件专门为Count组件生成action对象
import {INCREMENT,DECREMENT} from '../constant'
import store from '../store'

//同步action 返回值为Object类型
export const increment = data =>({type:INCREMENT,data})

export const decrement = data =>({type:DECREMENT,data})

//所谓的异步action,就是指action的返回值为函数
export const incrementAsync = (data,time=500)=>{
    return ()=>{
        setTimeout(()=>{
            store.dispatch(increment(data))
        },time)
    }
}








