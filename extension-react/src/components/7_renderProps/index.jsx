import React, { Component } from 'react'

export default class Parent extends Component {
  render() {
    return (
      <div style={{width:'50vw', padding:'5px',margin:'100px auto',border:'2px solid #ccc'}}>
          <h2>我是A组件</h2>
          <A render={(name)=><B name={name}/>}/>

      </div>
    )
  }
}


class A extends Component{
    state={name:'tom'}
    render(){
        const{name}=this.state
        return(
            <div style={{padding:'5px',border:'2px solid greenyellow'}}>
            <h2>我是B组件</h2>
            {this.props.render(name)}
            </div>
        )
    }
}


class B extends Component{
    render(){
        return(
            <div style={{padding:'5px',border:'2px solid blue'}}>
                <h2>我是C组件</h2>

            </div>
        )
    }
}