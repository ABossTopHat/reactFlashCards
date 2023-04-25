import React from "react";
import {Link, useRouteMatch} from "react-router-dom";
import Header from './Home/Header'
export default function View(){
  return(  
  <>
  <Header />
  <div className="container">
  <Link className='btn' to='/'>Home</Link>
    <Link></Link>
    <Link></Link>
  </div>
  <p>YEET VIEW</p>

  </>)
  
}