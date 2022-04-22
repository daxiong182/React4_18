import React, { Component } from 'react'
const data=[
    {id:'01',content:'你好 中国'},
    {id:'02',content:'你好 大熊'},
    {id:'03',content:'你好 硅谷尚'},
]
export default class Detail extends Component {
  render() {
    console.log(this.props);
      const{id,title}=this.props.match.params
      const content=data.find((obj)=>{
        return obj.id===id
      })
    return (
      <ul>
          <li>ID: {id}</li>
          <li>TITLE: {title}</li>
          <li>CONTENT: {content.content}</li>
      </ul>
    )
  }
}


