
import React, { useEffect } from "react";
import { useTypewriter,Cursor } from 'react-simple-typewriter'
const Header = () => {
 

  const [text] = useTypewriter({
    words: ['React/Node.js developer'],
    loop:1,
    typeSpeed:100,
    delaySpeed:1500
  })
  return (
    <div>



      <nav className="d-flex justify-content-center my-2">

        <div className="nav-main d-flex justify-content-center gap-3">

          <div className="navbar ">

            <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Navigation
            </a>
            <ul className="dropdown-menu bg-dark ">
              <li><a className="dropdown-item text-light" href="#">Landling page</a></li>
              <li><a className="dropdown-item text-light" href="#">skill</a></li>
              <li><a className="dropdown-item text-light" href="#">Portfolio</a></li>
              <li><a className="dropdown-item text-light" href="#">Contact Me</a></li>
            </ul>

          </div>
          <div className="navbar ">

            <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              social
            </a>
            <ul className="dropdown-menu bg-dark ">
              <li><a className="dropdown-item text-light" href="#"><i className="fa-brands fa-github mx-1"></i>Github </a></li>
              <li><a className="dropdown-item text-light" href="#"><i className="fa-brands fa-linkedin mx-1"></i>Linkedin</a></li>
              <li><a className="dropdown-item text-light" href="#"><i className="fa-brands fa-instagram mx-1"></i>Instagram</a></li>

            </ul>

          </div>
        </div>

      </nav>
      <div className="landing-page">
        <div className="main-content">
          <h6 className=" text-center center" >Hello i'm  <span style={{color:'red'}}>Rajan</span>. passionate  Web developer</h6>
          <h1 style={{fontWeight:'bold',color:'#075fe4;'}}>
            {text}
            <span style={{color:'red'}}>
            <Cursor/>
            </span>
          </h1>
          <div className="d-flex justify-content-center gap-2 my-4">
            <button type="download" className="btn btn-light btn-sm">Download CV</button>
            <button type="button" className="btn btn-secondary btn-sm">Contact Me</button>

          </div>
        </div>
      </div>


    </div>





  )
}

export default Header
