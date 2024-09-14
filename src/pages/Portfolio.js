import React from 'react'
import project1 from '../img/1.jpeg'
import project2 from '../img/2.jpeg'
import project3 from '../img/3.png'
import project4 from '../img/4.jpeg'
import project5 from '../img/5.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom'



const Portfolio = () => {
    return (
        <section id='portfolio' className='py-5 container'>
            
            <h4><span className='icon-color'>/</span>Projects</h4>

            <OwlCarousel className='owl-theme my-5' 
            loop 
            margin={10}
            dots={false}
            nav={false}
            autoplay
            autoplaySpeed={3000}
            autoplayHoverPause
            responsive={
                {
                    '1': {
                        items: 1
                    },
                    '1025': {
                        items: 3
                    }
                }

            } >
                <div className='item '>
                    <div className="projects">

                        <img src={project1} alt="" />
                        <div className="projects-hover">
                            <div className="visit">
                              <Link to='https://github.com/rajan-17/instagram.git' target='_blank'>Visit</Link>  
                                </div>
                        </div>
                    </div>

                </div>


                <div className='item '>
                    <div className="projects">
                        <img src={project2} alt="" />
                        <div className="projects-hover">
                        <div className="visit">
                        <Link to='https://protfolio-theta-eight.vercel.app/' target='_blank'>Visit</Link>
                                </div>
                        </div>

                    </div>
                </div>
                <div className='item '>
                    <div className="projects">
                        <img src={project3} alt="" />
                        <div className="projects-hover">
                        <div className="visit">
                        <Link to='https://biooriginpharma.com/' target='_blank'>Visit</Link>
                                </div>
                        </div>

                    </div>
                </div>
                <div className='item'>
                    <div className="projects">
                        <img src={project4} alt="" />
                        <div className="projects-hover">
                        <div className="visit">
                        <Link to='https://leafy-pika-1a74f8.netlify.app/' target='_blank'>Visit</Link>
                                </div>
                        </div>


                    </div>
                </div>
            </OwlCarousel>
        </section>
    )
}

export default Portfolio
