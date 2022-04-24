import React from 'react'
import { NavLink,Outlet,useOutlet} from 'react-router-dom'
export default function Home() {
    console.log(useOutlet());
  return (
    <div>
        <h4>Home组件类容</h4>
        <ul className="nav-tabs nav">

        <li>
            {/* <a href="" className='list-group-item'>News</a> */}
            <NavLink to='./news' className='list-group-item'>Home</NavLink>
        </li>

        <li>
            {/* <a href="" className='list-group-item'>Message</a> */}
            <NavLink to='./message' className='list-group-item'>Message</NavLink>
        </li>

        </ul>

        <Outlet />

    </div>
  )
}



