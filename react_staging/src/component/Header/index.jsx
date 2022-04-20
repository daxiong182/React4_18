import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'
import PropTypes from 'prop-types'

export default class Header extends Component {
  
  static propTypes={
    addTodo:PropTypes.func.isRequired

  }

    handleKeyUp=(e)=>{
        //函数体
        if(e.keyCode!==13) return
        //添加的todo名字不能为空
        if(e.target.value.trim()===''){
          alert('输入不能为空')
          return
        }

        //准备好一个toodo对象
        const todoObj={id:nanoid(),name:e.target.value,done:false}
        //将toodoObj传递给App
        this.props.addTodo(todoObj)
        e.target.value=''

    }
  render() {
      console.log(this.props.a);
    return (
      <div className='todo-header'>
          <input onKeyUp={this.handleKeyUp} type="text" placeholder='请输入你的任务名称,按回车键确认'/>
      </div>
    )
  }






}
