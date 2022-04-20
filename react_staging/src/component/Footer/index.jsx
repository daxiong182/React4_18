import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {

  
  handleCheckAll=(e)=>{
      this.props.checkAllTodo(e.target.checked)
  }

  handleClearAllDone=()=>{
    this.props.clearAllDone()

  }

  render() {
    const {todos}=this.props
    //计算已完成的个数
    const doneCount=todos.reduce((pre,todo)=>todo.done?(pre+1):pre,0)
    //总数
    const total=todos.length

    return (
      <div className='todo-footer' style={{marginTop:'37px',borderRadius:'5px'}}>
          <label>
              <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount===total && total!==0 ?true:false}/>
          </label>
          <span>
              <span>已完成{doneCount}</span> / 全部 {total}
          </span>
          <button onClick={this.handleClearAllDone} style={{cursor:'pointer'}} className='btn btn-danger'>清除已完成任务</button>
      </div>
    )
  }
}
