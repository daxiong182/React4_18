import React, { Component } from 'react'

export default class Demo extends Component {

 state={count:0}
 
 add=()=>{
     //1.获取原来的count值
    //  const {count}=this.state
     //2.更新状态
    //  this.setState({count:count+1},()=>{
    //     console.log('刚刚更改的state: ',this.state.count);
    //  })

    //函数式的setState 可以接收两个参数 1.sate 2.父组件传递的props 如果新状态依赖原状态 建议使用函数式的setState
    this.setState((state,props)=>{
        return {count:state.count+1}
    })


 }

  render() {
    return (
      <div>
          <h2>当前求和为:{this.state.count}</h2>
          <button onClick={this.add}>点我加1</button>
      </div>
    )
  }
}
