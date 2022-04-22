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

  replaceShow=(id,title)=>{
    //replace+params
    // this.props.history.replace(`/home/message/detail/${id}/${title}`)

    //replace+state
    this.props.history.replace(`/home/message/detail`,{id,title})
  }

  pushShow=(id,title)=>{
    //push+params
    // this.props.history.push(`/home/message/detail/${id}/${title}`)

    //push+state
    this.props.history.push(`/home/message/detail`,{id,title})
  }

  back=()=>{
    this.props.history.goBack()
  }

  forward=()=>{ 
    this.props.history.goForward()
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
                {/* params参数 */}
                {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp; */}

                <button onClick={()=>this.pushShow(msgObj.id,msgObj.title)}>push查看</button> &nbsp;&nbsp;
                <button onClick={()=>this.replaceShow(msgObj.id,msgObj.title)}>replace查看</button> &nbsp;&nbsp;

                {/* 向路由组件传递search参数 */}
                {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}

                {/* 向路由组件传递state参数 */}
                <Link to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>

              </li> 
            )
          })
        }
      </ul>
      <hr />
      {/* 注册路由 声明接收params参数*/}
      {/* <Route path='/home/message/detail/:id/:title' component={Detail} /> */}

      {/* serach 参数的接收 正常注册即可 不需要占位符 */}
      {/* <Route path='/home/message/detail' component={Detail}></Route> */}

      {/* state参数无需声明接收，正常注册路由即可 */}
        <Route path='/home/message/detail' component={Detail}/>

        <button onClick={this.back}>回退</button>&nbsp;&nbsp;
        <button onClick={this.forward}>前进</button>&nbsp;&nbsp;

    </div>
    )
  }



}
