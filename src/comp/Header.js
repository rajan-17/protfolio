

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

  const particlesLoaded = (container) => {
      console.log(container);
  };


  return (
    <div>

<Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "",
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
                            mode: "repulse",
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
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />



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
