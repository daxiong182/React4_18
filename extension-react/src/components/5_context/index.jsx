import React, { Component } from 'react'

//创建Context对象
const MyContext=React.createContext();

export default class A extends Component {
  state={username:'tom',age:18}
  render() {
      const {username,age}=this.state
    return (
      <div style={{border:'2px solid #ccc',width:'50vw',margin:'50px auto',padding:'5px'}}>
          <h3>我是A组件</h3>
          <h4>我的用户名是:{this.state.username}</h4>
          {/* <B username={this.state.username}/> */}
          <MyContext.Provider value={{username,age}}>
              <B />
          </MyContext.Provider>
      </div>

    )
  }
}



class B extends Component{
    render(){
        return(
            <div style={{border:'2px solid greenyellow',padding:'5px'}}>
                <h3>我是B组件</h3>
                <C />
            </div>
        )
    }
}



// class C extends Component{
//     static contextType=MyContext
//     render(){
//         console.log('c: ',this);
//         return(
//             <div style={{border:'2px solid skyblue',padding:'5px'}}>
//                 <h3>我是C组件</h3>
//                 <h4>我从A组件接收到的用户名是:{this.context.username}--年龄:{this.context.age}</h4>
//             </div>
//         )
//     }
// }


function C(){

    return(
               
      <div style={{border:'2px solid skyblue',padding:'5px'}}>
           <h3>我是C组件</h3>
           <MyContext.Consumer>
            {
                value => {
                    return `${value.username},${value.age}`
                }
            }      
           </MyContext.Consumer>
     </div>
    )

}






