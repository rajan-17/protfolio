import React from "react"


const Header = () => {


  return (
    <div>
      <nav className="d-flex justify-content-center gap-3">
          <div className="navbar">
         
          <a class="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Navigation
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        
          </div>
          <div className="navbar">
         
          <a class="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Social
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        
          </div>
      </nav>
      <div className="landing-page">
        <div className="main-content">
          <h6 className=" text-center center">Hello i'm Rajan. passionate  Web developer</h6>
          <h1>React/Node.js developer</h1>
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
