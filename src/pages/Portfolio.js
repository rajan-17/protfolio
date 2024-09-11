import React from 'react'
import project1 from '../img/1.jpeg'
import project2 from '../img/2.jpeg'
import project3 from '../img/3.png'
import project4 from '../img/4.jpeg'
import project5 from '../img/5.png'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



const Portfolio = () => {
    return (
        <section id='portfolio' className='my-5'>
            <div className="container">

                <h4><span className='icon-color'>/</span>Projects</h4>

            </div>


            <OwlCarousel className='owl-theme my-5' loop margin={4} dots={false} nav={false} autoplay autoplaySpeed={3000} responsive={
                {
                    '1': {
                        items: 1
                    },
                    '1025': {
                        items: 3
                    }
                }

            } >
                <div className='item mx-2'>
                    <div className="projects">

                        <img src={project1} alt="" />
                    </div>

                </div>


                <div className='item mx-2'>
                    <div className="projects">
                        <img src={project2} alt="" />


                    </div>
                </div>
                <div className='item mx-2'>
                    <div className="projects">
                        <img src={project3} alt="" />


                    </div>
                </div>
                <div className='item mx-2'>
                    <div className="projects">
                        <img src={project4} alt="" />



                    </div>
                </div>
            </OwlCarousel>
        </section>
    )
}

export default Portfolio
