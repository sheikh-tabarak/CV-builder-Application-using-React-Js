import React from 'react'
import logo from './logo.png';
import Coverletter from '../clform/clform'
import { BrowserRouter, Routes, Route } from "react-router-dom";


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



export default function header() {
  return (
    <>
    {/* <nav class="p-3 navbar fixed navbar-dark bg-dark">
<a class="navbar-brand" href="/"><img width={170} src={logo} alt="" /> </a>



<ul class="list-group list-group-horizontal-sm align-left">
  <li class="list-group-item"><a href="/"> CV Bulider</a></li>
  <li class="list-group-item"><a href="/build-cover-letter">Cover Letter Builder</a> </li>
  
</ul>


</nav> */}


<nav class="navbar navbar-expand navbar-dark bg-dark p-3 d-flex bd-highlight">
<a class="navbar-brand " href="/"><img width={170} src={logo} alt="" /> </a>
 

  <div className="bd-highlight ml-5 " id="navbarSupportedContent"> 
    <ul class="navbar-nav mr-auto">



      <li class="nav-item active ">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">Resume</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/build-cover-letter">Cover Letter</a>
      </li>

      {/* <ul class="list-group list-group-horizontal-sm ml-10">
  <li class="list-group-item"><a class="nav-link text-black" href="#">Home</a></li>
  <li class="list-group-item"><a class="nav-link text-black" href="/">Resume</a></li>
  <li class="list-group-item">  <a class="nav-link text-black" href="/build-cover-letter">Cover Letter</a></li>
</ul>
      */}
    </ul>
   
  </div>
</nav>




</>

  )
}
