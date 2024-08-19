import React from 'react'
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const Header = () => {
  const [ init, setInit ] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
      initParticlesEngine(async (engine) => {
          // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
          // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
          // starting from v2 you can add only the features you need reducing the bundle size
          //await loadAll(engine);
          //await loadFull(engine);
          await loadSlim(engine);
          //await loadBasic(engine);
      }).then(() => {
          setInit(true);
      });
  }, []);

  return (
    <div>
       <Particles
        
       
        options={{
            background: {
                color: {
                    value: "#fffff",
                },
            },
           
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "grab",
                        links: {
                          color: "#ffffff",
                          distance: 100,
                          enable: true,
                         opacity:0.5,
                          width: 1,
                      },
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                  grab:{
                    distance : 100,
                    
                  }  
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 100,
                  enable: true,
                 opacity:0.5,
                  width: 1,
              },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 500,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 2 },
                },
            },
            detectRetina: true,
        }}
    />
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
