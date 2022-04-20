import React, { Component } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import List from './component/List'
import './index.css'
export default class App extends Component {

  state={todos:[{id:'001',name:'吃饭',done:true},
                {id:'002',name:'睡觉',done:false},
                {id:'003',name:'敲代码',done:false},
                {id:'004',name:'逛街',done:false},
]}

  addTodo=(todoObj)=>{
    //获取原todos
    const {todos}=this.state
    //追加一个todo
    const newTodos=[todoObj,...todos]
    //更新状态
    this.setState({todos:newTodos})
    
}
//用于更新一个todo
updateTodo=(id,done)=>{
  //获取状态中的todos
 const {todos}=this.state
 //匹配处理数据
 const newTodos=todos.map((todoObj)=>{
    if(todoObj.id===id)return{...todoObj,done}
    else return todoObj
  })
  this.setState({todos:newTodos})
}

//删除一个todo
deleteTodo=(id)=>{
  const {todos}=this.state
  //删除指定id的todo对象
 const filterTodos=todos.filter((toodoObj)=>toodoObj.id!=id)
 this.setState({todos:filterTodos})
}

//全选
checkAllTodo=(done)=>{
  //获取原来的todos
  const{todos}=this.state
const newTodos=  todos.map((todoObj)=>{
    return {
      ...todoObj,done
    }
  })
  //更新状态
  this.setState({todos:newTodos})
}

//清除所有已完成
clearAllDone=()=>{
  const {todos}=this.state
  const newTodos=todos.filter(todo=>!todo.done)
  this.setState({todos:newTodos})
}


  render() {
   
    const {todos}=this.state
    return (
      <div>
        <Header addTodo={this.addTodo}/>
        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
        <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
      </div>
    )
  }
}


