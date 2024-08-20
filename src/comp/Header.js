import React from 'react'
import { useCallback, useEffect, useState } from "react";

const Header = () => {
 

  return (
    <div>
   
    
      <nav class="container navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Portfolio</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Portfolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <div className=" container landing-page">
        <div className="row my-5">
          <div className="col-lg-8">
            <div className="line my-5"></div>
            <div className="line2 my-2"><p>I’m Rajan, a <br />Web Developer</p></div>
            <div className="lin3"><p>Full stack Developer</p></div>
          </div>
          <div className="col-lg-4">
            <div className="line3">
              <h4 className='my-3'>ABOUT ME</h4>
              <p>Turning complex challenges into sleek, user-friendly digital experiences. I blend creativity with technical skill to build websites that not only look great but perform seamlessly. Let's transform your ideas into interactive web solutions!</p>

            </div>
            < hr className='my-5 line4' />

            <div className="line3">
              <h4 className='my-3'>My work</h4>
              <p>Explore my work to see how I turn ideas into practical, visually appealing web solutions.</p>

            </div>

            < hr className='my-5 line4' />

            <div className="line3">
              <h4 className='my-4'>Follow me</h4>
              <div className="icon my-4">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-github"></i>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>





  )
}

export default Header
