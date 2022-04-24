import React, { Component,Fragment,lazy,Suspense} from 'react'
// import { NavLink,Route } from 'react-router-dom'

// import About from './components/2_lazyLoad/About'
// import Home from './components/2_lazyLoad/Home'

// const Home=lazy(()=>import('./components/2_lazyLoad/Home'))
// const About=lazy(()=>import('./components/2_lazyLoad/About'))

import Fragments from './components/4_fragment'

// import A from './components/5_context'

import Hooks from './components/3_hooks'

// import Demo from './components/6_optimize'

// import Parent from './components/7_renderProps'

import Parent from './components/8_errorboundary'

export default class App extends Component {
  render() {
    return (
      <div>

         {/* <div className="row">
             <div className="col-xs-offset-2 col-xs-8">
                 <div className="page-header"><h2>React Router Demo</h2> </div>           
             </div>
         </div>

         <div className="row">
             <div className="col-xs-2 col-xs-offset-2">
                 <div className="list-group">
                     <NavLink className='list-group-item' to='/about'>About</NavLink>
                     <NavLink className='list-group-item' to='/home'>Home</NavLink>
                 </div>
             </div>
             <div className="col-xs-6">
                 <div className="panel">
                     <div className="panel-body">
                         <Suspense fallback={<h1>loading...</h1>}>
                         <Route path='/about' component={About} />
                         <Route path='/home' component={Home} />    
                         </Suspense>
                                         
                </div>
              </div>
             </div>
         </div> */}


         {/* <Hooks/> */}

         {/* <Fragments /> */}

         {/* <A/> */}

         <Fragment >

         {/* <Demo/> */}
         <Parent />


         </Fragment>

      </div>
    )
  }
}
