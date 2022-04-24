import React from 'react'
import Header from './components/Header'
import { NavLink,Route,Routes,useRoutes,useInRouterContext } from 'react-router-dom'
import routes from './routes'
export default function App() {
    //根据路由表生成对应的路由
    const element=useRoutes(routes)
    //判断组件是否处于路由环境中
    console.log('@@',useInRouterContext());

  return (
    <div>
        <div className="row">
            <Header/>
        </div>
        <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
                <div className="list-group">
                    <NavLink className='list-group-item' to='./about'>About</NavLink>
                    <NavLink className='list-group-item' to='./home'>Home</NavLink>
                </div>
            </div>
        <div className="col-xs-6">
        <div className="panel">
            {/* 注册路由 */}
              {/* <Routes>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/home' element={<Home/>}/>
                  <Route path='/' element={<Navigate to='/about'/>}/>
              </Routes> */}
            {/* 使用路由表 */}

            { element }

     </div>

   </div>
  </div>      
 </div>
  )
}
