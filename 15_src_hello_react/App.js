//创建外壳
import React,{Component} from 'react'
import Hello from './components/Hello'
import Welcome from './components/Welcome'

//创建并暴露组件
export default class App extends Component{
    render(){

        return(
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}






