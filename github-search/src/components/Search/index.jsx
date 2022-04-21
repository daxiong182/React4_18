import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
export default class Search extends Component {
   search=async ()=>{       
        //获取用户的输入
        const {keyWordElement:{value:keyword}}=this
        try {
          PubSub.publish('githubData',{isFirst:false,isLoading:true})
          const res= await fetch(`https://api.github.com/search/users?q=${keyword}`)
          const data=await res.json()
          PubSub.publish('githubData',{isLoading:false,users:data.items})
        } catch (error) {
          console.log('请求出错:',error)
          PubSub.publish('githubData',{isLoading:false,err:error.message})
        }
      
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







