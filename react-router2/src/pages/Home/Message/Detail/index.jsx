import React, { Component } from 'react'
// import qs from 'qs'
const data=[
    {id:'01',content:'你好 中国'},
    {id:'02',content:'你好 大熊'},
    {id:'03',content:'你好 硅谷尚'},
]

export default class Detail extends Component {

  render() {
//接收params参数
// const {id,title}=this.props.match.params


 // 接收search参数      
 //    const {search}=this.props.location

 //    const{id,title} =qs.parse(search.slice(1))

//接收state参数
const {id,title}=this.props.location.state

      const content=data.find((obj)=>{
        return obj.id===id
      })

    return (
      <ul>
          <li> ID:{id}</li>
          <li> TITLE: {title}</li>
          <li> CONTENT: {content.content}</li>
      </ul>
    )

  }

}


