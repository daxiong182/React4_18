import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    search=()=>{
        //获取用户的输入
        const {keyWordElement:{value:keyword}}=this
        //发送网络请求前通知App更新状态
        this.props.updateAppState({isFirst:false,isLoading:true})
        //发送网络请求
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
            //请求成功后通知App更新状态
            res=>{this.props.updateAppState({isLoading:false,users:res.data.items})},
            err=>{this.props.updateAppState({isLoading:false,err:err.message})}
        )
    }
  render() {
    return (
    <section className="jumbotron">
      <h3 className="jumbotron-heading">搜索github用户</h3>
      <div>
        <input ref={c=>this.keyWordElement=c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
        <button onClick={this.search}>搜索</button>
      </div>
    </section>
    )
  }
}







