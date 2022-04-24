import React, {PureComponent } from 'react'


export default class Parent extends PureComponent {
    state={carName:'奔驰c63'}

    changeCar=()=>{
        this.setState({carName:'迈巴赫'})
    }

    // shouldComponentUpdate(nextProps,nextState){
    //   return !this.state.carName === nextState.carName
      
    // }

  render() {
    const {carName}=this.state
    return (
      <div className='parent' style={{margin:'200px'}}>
          <h3>我是Parent组件</h3>
          <h2>我的车名字是:{carName}</h2>
          <button onClick={this.changeCar}>点我换车</button>
          <Child carName='奥托'/>
      </div>
    )
  }
}


class Child extends PureComponent{

  // shouldComponentUpdate(nextProps,nextState){

  //  return !this.props.carName===nextProps.carName
    
  // }

    render(){
        return(
            <div className='child'>
            <h3>子组件接收到的车是:{this.props.carName}</h3>
            </div>
        )
    }
}




















