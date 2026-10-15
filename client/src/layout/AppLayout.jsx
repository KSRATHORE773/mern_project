import React from 'react'
import {NavLink, Outlet} from 'react-router'

function AppLayout() {
  const[isAppready,upadteappstatus]=React.useState(false)
  setTimeout(()=>{
    upadteappstatus(true)},3*1000)
  if(!isAppready){
    return (
      <div>
        page is loading
      </div>
    )
  }
  return (
    <div>
      <header>HEADER</header>
      <nav>
        <ul>
            <li><NavLink to={"/"}>Dashboard</NavLink></li>
            <li><NavLink to={"/Student"}>Student</NavLink></li>
            <li><NavLink to={"/Teacher"}>Teacher</NavLink></li>
            <li><NavLink to={"/Staff"}>Staff</NavLink></li>        
        </ul>  
      </nav>  
      <main>
        <Outlet></Outlet>
      </main>
      <footer>FOOTER</footer>
    </div>
  )
}

export default AppLayout
