import React, { Component } from 'react'
import { Route,Switch,Redirect } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'
export default class App extends Component {
  render() {
    return (
      <div>

        <div className='row'>
            <Header />
        </div>
        <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
                <div className="list-group">
                    {/* <a href="./about.html" className="list-group-item">About</a>
                    <a href="./home.html" className="list-group-item">Home</a> */}                   
                    <MyNavLink to='/about' > About </MyNavLink>           
                    <MyNavLink to='/home' > Home </MyNavLink>               
                </div>
            </div>
            <div className="col-xs-6">
                <div className="panel">
                <div className="panel-body">
                    {/* 注册路由  Switch 禁止一个路径对应多个组件*/}
                    <Switch>
                    <Route  path='/about' component={About}/>
                    <Route  path='/home' component={Home}/>  
                    <Redirect to='/about'/>              
                    </Switch>                
                </div>
              </div>
            </div>
          </div>
    </div>
    )
  }
}





