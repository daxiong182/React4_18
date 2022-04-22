import React, { Component } from 'react'
import { Button,DatePicker } from 'antd';
import {WechatOutlined,SearchOutlined} from '@ant-design/icons'
export default class App extends Component {
   
  onChange(date, dateString) {
    console.log(date, dateString);
  }

  render() {
    return (

      <div style={{margin:'50px'}}>
        App...
        <button>点我</button>&nbsp;&nbsp;
        <Button type="primary" icon={<SearchOutlined />}>Primary Button</Button>&nbsp;&nbsp;
        <WechatOutlined />&nbsp;&nbsp; 
        <DatePicker onChange={this.onChange} />     
      </div>

    )
  }

}


