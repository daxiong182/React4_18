import React, { Component } from 'react'
import Detail from './Detail'
import {Link,Route} from 'react-router-dom'
export default class Message extends Component {

  state={
    messageArr:[
      {id:'01',title:'消息1'},
      {id:'02',title:'消息2'},
      {id:'03',title:'消息3'}
    ]
  }

  render() {
   
    const {messageArr}=this.state
    return (
      <div>
      <ul style={{marginTop:'15px'}}>
        {
          messageArr.map((msgObj)=>{
            return(
              <li key={msgObj.id} style={{padding:'5px'}}>
                <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
              </li> 
            )
          })
        }
      </ul>
      <hr />
      {/* 注册路由 声明接收params参数*/}
      <Route path='/home/message/detail/:id/:title' component={Detail} />
    </div>
    )
  }




}
