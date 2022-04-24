import React, { Component } from 'react'
import Child from './Child'

//错误边界 总是去找出错组件的父组件去处理错误 防止错误外溢
export default class Parent extends Component {

    state={
        hasError:'' //用于标识子组件是否产生错误
    }

    //当Parent组件出现错误的时候，会触发getDerivedStateFromError调用,并携带错误信息
    static getDerivedStateFromError(error){
        console.log(error);
        return {hasError:error}
    }

    componentDidCatch(error,info){
        console.log('此处统计错误,l反馈给服务器,用于通知编码人员进行bug修改');
    }

  render() {

    return (
        <div style={{margin:'100px'}}>
        <h1>我是Parent组件</h1>
        { this.state.hasError ? <h2>当前网络不稳定,请稍后再试</h2> :<Child/> }

        </div>      
    )
  }





}











