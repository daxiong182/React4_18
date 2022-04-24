import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { NavLink,Route,Routes,useRoutes } from 'react-router-dom'
import routes from './routes'
export default function App() {
    //根据路由表生成对应的路由
    const element=useRoutes(routes)

  return (
    <div>
        <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
                <div className="page-header"><h2>React Router6 Demo</h2></div>
            </div>
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
