
import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
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
              <li><HashLink className="dropdown-item text-light" to="/" target="blank">Landling page</HashLink></li>
              <li><HashLink className="dropdown-item text-light" to="#about" target="blank">about</HashLink></li>
              <li><HashLink className="dropdown-item text-light" to="#skill" target="blank">skill</HashLink></li>
              <li><HashLink className="dropdown-item text-light" to="#portfolio" target="blank">Portfolio</HashLink></li>
              <li><HashLink className="dropdown-item text-light" to="#contact" target="blank">Contact Me</HashLink></li>
            </ul>

          </div>
          <div className="navbar ">

            <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              social
            </a>
            <ul className="dropdown-menu bg-dark ">
              <li><Link className="dropdown-item text-light" to ="https://github.com/rajan-17" target="blank"><i className="fa-brands fa-github mx-1"></i>Github </Link></li>
              <li><Link className="dropdown-item text-light" to="https://www.linkedin.com/in/rajan-kumar-99a77b238/" target="blank"><i className="fa-brands fa-linkedin mx-1"></i>Linkedin</Link></li>
              <li><Link className="dropdown-item text-light" to="https://www.instagram.com/rajannn_10?igsh=bGlpZG5nd3p2aWJ5&utm_source=qr" target="blank"><i className="fa-brands fa-instagram mx-1"></i>Instagram</Link></li>

            </ul>

          </div>
        </div>

      </nav>
      <div className="landing-page ">
        <div className="main-content">
          <h6 className=" text-center center" >Hello i'm  <span style={{color:'red'}}>Rajan</span>. passionate  Web developer</h6>
          <h1 style={{fontWeight:'bold',color:'#075fe4;'}}>
            {text}
            <span style={{color:'red'}}>
            <Cursor/>
            </span>
          </h1>
          <div className="d-flex justify-content-center  gap-2 my-4  ">
          <Link to ="Rajan Kumar Resume.pdf"  target="_blank" download> <button type="download" className="btn btn-light btn-sm ">Download CV</button></Link>
          <HashLink to="#contact" target="blank"><button type="button" className="btn btn-secondary btn-sm">Contact Me</button></HashLink>

          </div>
        </div>
      </div>


    </div>





  )
}

export default Header
