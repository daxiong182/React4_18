import React, { Component } from 'react'
import store from  '../redux/store'
//引入actionCreator,专门用于创建action对象
import { createIncrementAction,createDecrementAction,createIncrementAsyncAction } from '../redux/count_action'
export default class Count extends Component {
state={count:0}

componentDidMount(){
    //检测redux中状态的变化
    store.subscribe(()=>{
        this.setState({})   
    })
}


increment=()=>{
    const {value}=this.selectNumber
    store.dispatch(createIncrementAction(parseInt(value)))
}

decrement=()=>{
    const {value}=this.selectNumber
    store.dispatch(createDecrementAction(parseInt(value)))
}

incrementIfOdd=()=>{
    const {value}=this.selectNumber
    let count=store.getState()
    if(count%2!=0){
        store.dispatch(createIncrementAction(parseInt(value)))
    }
}
incrementAsync=()=>{
    const {value}=this.selectNumber
    store.dispatch(createIncrementAsyncAction(parseInt(value),500))   
}

  render() {
    return (
      <div>
          <h2>当前求和为: {store.getState()}</h2>
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
