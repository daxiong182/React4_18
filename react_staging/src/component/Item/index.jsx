import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state={mouse:false}
  //标识鼠标移入移出
  handleMouse=(flag)=>{
    return ()=>{
      this.setState({mouse:flag})
    }
  }
  //勾选或者取消勾选的回调
  handleCheck=(id)=>{
    return (e)=>{
      this.props.updateTodo(id,e.target.checked)
    }
  }
  //删除一个待办事项的回调
  handleDelete=(id)=>{
    if(window.confirm('确定删除吗?'))
    {

      this.props.deleteTodo(id)
      
    }

  }
  render() {

    const {id,name,done}=this.props
    const {mouse}=this.state
    return (
      <div>
          <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
              <label>
                  <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                  <span>{name}</span>
              <button onClick={()=>this.handleDelete(id)} className='btn btn-danger' style={{display:mouse?'block':'none',cursor:'pointer'}}>删除</button>
              </label>
          </li>
      </div>
    )
  }
}




