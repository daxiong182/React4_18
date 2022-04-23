import React, { Component } from 'react'


//引入connect用于连接UI 组件 和 redux
import{connect} from 'react-redux'

import {decrement,increment,incrementAsync} from '../../redux/actions/count'


//定义UI组件
 class Count extends Component {
   
    state={count:0}

    increment=()=>{
        const {value}=this.selectNumber
        this.props.increment(parseInt(value))
    }
    
    decrement=()=>{
        const {value}=this.selectNumber
        this.props.decrement(parseInt(value))
    }
    
    incrementIfOdd=()=>{
        const {value}=this.selectNumber
        if(this.props.count%2!=0){
          this.props.increment(parseInt(value))
        }
      
    }
    incrementAsync=()=>{
        const {value}=this.selectNumber
        this.props.incrementAsync(parseInt(value))
    }
    
      render() {
    
        console.log('Count UI组件接收到的props是:',this.props);
        
        return (
          <div>
            <h2>我是Count组件</h2>
            <h4>下方组件总人数：{this.props.personCount}</h4>
              <h4>当前求和为: {this.props.count}</h4>
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

    state=>({
      count:state.count,
      personCount:state.persons.length
    }),

    //mapDispatchToProps的一般写法
    // dispatch=>({
    //         jia:number=>dispatch(createIncrementAction(number)),
    //         jian:number=>dispatch(createDecrementAction(number)),
    //         jiaAsync:(number,time)=>dispatch(createIncrementAsyncAction(number,time)),
    // })

    //mapDispatchToProps的简写
    {
        increment,
        decrement,
        incrementAsync
    }



    )(Count)

