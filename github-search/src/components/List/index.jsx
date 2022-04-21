import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class List extends Component {

//初始化状态
  state={ 
    users:[],//users初始值为数组
    isFirst:true,//是否为第一次打开页面
    isLoading:false,//标识是否处于加载中
    err:'',//存储请求相关的错误信息
  }

  componentDidMount(){
   this.token= PubSub.subscribe('githubData',(_,data)=>{
        this.setState(data)
    })
  }
  componentWillUnmount(){
      PubSub.unsubscribe(this.token)
  }

  render() {
      const {users,isFirst,isLoading,err}=this.state
    return (
<div className="row">
            {
        isFirst?<h2 style={{textIndent:'15px'}}>欢迎使用,输入关键字,随后点击搜索</h2> : 
        isLoading? <h2>Loading......</h2> :
        err ?<h2 style={{color:'red',textIndent:'15px'}}>{err}</h2>:
        users.map((userObj)=>{
            return(
      <div className="card" key={userObj.id}>
          <a rel='noreferrer' href={userObj.html_url} target="_blank">
            <img alt='head_portrait' src={userObj.avatar_url} style={{width:'100px'}}/>
          </a>
        <p className="card-text">{userObj.login}</p>
      </div>
            )
                })
            }
</div>
  
    )
  }
}
