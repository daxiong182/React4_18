import React, { Component } from 'react'


//引入connect用于连接UI 组件 和 redux
import{connect} from 'react-redux'

import {createDecrementAction,createIncrementAction,createIncrementAsyncAction} from '../../redux/count_action'


//定义UI组件
 class Count extends Component {
    state={count:0}

    increment=()=>{
        const {value}=this.selectNumber
        this.props.jia(parseInt(value))
    }
    
    decrement=()=>{
        const {value}=this.selectNumber
        this.props.jian(parseInt(value))
    }
    
    incrementIfOdd=()=>{
        const {value}=this.selectNumber
        if(this.props.count%2!=0){
          this.props.jia(parseInt(value))
        }
      
    }
    incrementAsync=()=>{
        const {value}=this.selectNumber
        this.props.jiaAsync(parseInt(value))
    }
    
      render() {
    
        console.log('UI组件接收到的props是:',this.props);
    
        return (
          <div>
              <h2>当前求和为: {this.props.count}</h2>
              <select ref={c=>this.selectNumber=c}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
              </select>&nbsp;&nbsp;
              <button onClick={this.increment}>+</button>&nbsp;&nbsp;
              <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
              <button onClick={this.incrementIfOdd}>当前求和为奇数加</button>&nbsp;&nbsp;
              <button onClick={this.incrementAsync}>异步加</button>
          </div>
        )
      }
    }

//创建并暴露一个Count的容器组件
export default connect(
    state=>({count:state}),

    //mapDispatchToProps的一般写法
    // dispatch=>({
    //         jia:number=>dispatch(createIncrementAction(number)),
    //         jian:number=>dispatch(createDecrementAction(number)),
    //         jiaAsync:(number,time)=>dispatch(createIncrementAsyncAction(number,time)),
    // })

    //mapDispatchToProps的简写
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction
    }



    )(Count)

