import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {

  back=()=>{
    this.props.history.goBack()
  }

  forward=()=>{
    this.props.history.goForward()
  }

  render() {
     
    return (
        <div className="col-xs-offset-2 col-xs-8">
        <div className="page-header"> <button onClick={this.back}>回退</button>&nbsp;&nbsp;
        <button onClick={this.forward}>前进</button>&nbsp;&nbsp;<h2>React Router Demo</h2></div>
        </div>
    )
  }
}


//withRouter可以加工一般组件 让一般组件具备路由组件所特有的API
export default withRouter(Header)

