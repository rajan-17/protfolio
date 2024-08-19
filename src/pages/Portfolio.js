import React from 'react'
import project1 from '../img/Screenshot 2024-08-11 210935.png'
import project2 from '../img/Screenshot 2024-08-11 214302.png'
import project3 from '../img/Screenshot 2024-08-11 221955.png'
const Portfolio = () => {
  return (
    <div className="about-color">

      <div className='container '>
        <div className="row">
          <div className="col-sm-6">
            <h4><span className='icon-color'>/</span> My portfolio</h4>
            <div className="line5 my-2">Take a look at the latest <br />projects I’ve done</div>

            
              <img className="project 2 my-3" src={project1} alt="" />
           

          </div>
          <div className="col-sm-6">
            <img  className="project 2 my-3" src={project2} alt="" />
            <img  className="project 2 my-3" src={project3} alt="" />
          </div>
        </div>


      </div>
    </div>
  )
}

export default Portfolio
