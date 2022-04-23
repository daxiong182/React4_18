import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import { connect } from 'react-redux'
import {addPerson} from '../../redux/actions/person'

 class Person extends Component {
    addPerson=()=>{
        const name=this.nameNode.value
        const age=this.ageNode.value
        console.log(name,age);
        const personObj={id:nanoid(),name,age}
        //这个addPerson 是容器组件通过props传过来的
        this.props.addPerson(personObj)
        this.nameNode.value=''
        this.ageNode.value=''
    }

  render() {
    return (
      <div>
          <h2>我是Person组件</h2>
          <h4>上方求和结果为:{this.props.sum}</h4>
          <input ref={c=>this.nameNode=c} type="text" placeholder='输入名字'/> &nbsp;&nbsp;
          <input ref={c=>this.ageNode=c} type="text" placeholder='输入年龄'/> &nbsp;&nbsp;
          <button onClick={this.addPerson}>添加</button>
          <ul>
              {
                this.props.personArr.map((obj)=>{
                  return <li key={obj.id}>{obj.name}--{obj.age}</li>
                })
              }
          </ul>
      </div>
    )
  }
}


export default connect(
  //映射状态
  state=>({personArr:state.persons,sum:state.count}),
  //映射操作状态的方法
  {
    addPerson
  }

)(Person)




