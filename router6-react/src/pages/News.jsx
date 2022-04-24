import React from 'react'
import { useNavigationType,useResolvedPath } from 'react-router-dom'
export default function News() {
    //判断路由跳转方式
    console.log(useNavigationType());
    console.log('@@',useResolvedPath('/user?id=0018&name=tom'));
  return (
    <div>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
    </div>
  )
}
