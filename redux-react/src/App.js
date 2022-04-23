import React, { Component } from 'react'
//注意使用redux 引入的是容器组件 不是UI组件
import Count from './container/Count'
import Person from './container/Person'

//引入reudx
// import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <div style={{margin:'15px'}}>
        <Count />
        <hr/>
        <Person />
      </div>
    )
  }
}

