import React, { Component } from 'react'
import News from './News'
import Message from './Message'
import {Redirect, Route, Switch} from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是home内容</h3>
        <div>
          <ul className="nav nav-tabs">
            <li style={{display:'flex'}}>
              <MyNavLink to='/home/news'>News</MyNavLink>
              <MyNavLink to='/home/message'>Message</MyNavLink>
            </li>
          </ul>
          {/* 注册路由 */}
          <Switch>
          <Route path='/home/news' component={News} />
          <Route path='/home/message' component={Message} />
          <Redirect to='/home/news'/>
          </Switch>
        </div>
      </div>
    )
  }
}
