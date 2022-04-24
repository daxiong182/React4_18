import React, { Component } from 'react'
import ReactDOM from 'react-dom';

//类式组件
// export default class Hooks extends Component {

//     state={count:0}

//     componentDidMount(){
//        this.timer= setInterval(()=>{
//             this.setState(state=>({count:state.count+1}))
//         },1000)
//     }

//     add=()=>{
//         this.setState((state)=> ({count:state.count+1}) )
//     }

//     unmount=()=>{
//         ReactDOM.unmountComponentAtNode(document.querySelector('#root'))
//     }
    
//     myRef=React.createRef()

//     show=()=>{
//        alert(this.myRef.current.value) 
//     }

//     componentWillUnmount(){
//         clearInterval(this.timer)
//     }

//   render() {
//     return (
//       <div style={{margin:'30px'}}>
//           <input type="text" ref={this.myRef} />
//           <h2>当前求和为: {this.state.count}</h2>
//           <button onClick={this.add}>点我+1</button>&nbsp;&nbsp;
//           <button onClick={this.unmount}>卸载组件</button>
//           <button onClick={this.show}>点击展示</button>
//       </div>
//     )
//   }
// }


function Demo(){

    const [count,setCount]=React.useState(0);
    
    const myRef=React.useRef();
    
    React.useEffect(()=>{
        //函数体
     let timer= setInterval(()=>{
            setCount(count=>count+1)
        },1000)
        
        return ()=>{
            clearInterval(timer)
        }

    },[]) //第二个数组参数省略不写 监测所有。【】空数组 谁也不监测 相当于 componenDdidMount


    function add(){
        setCount(count=>count+1)
    }

    //卸载组件
    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    //提示数据
    function show(){
        alert( myRef.current.value)
    }


    return (
        <div  style={{margin:'30px'}}>
        <input type="text" ref={myRef}/>
        <h2>当前求和为:{count}</h2>
        <button onClick={add}>点我+1</button> &nbsp;&nbsp;
        <button onClick={unmount}>卸载组件</button>
        <button onClick={show}>点我提示数据</button>
        
        </div>
    )
}

export default Demo