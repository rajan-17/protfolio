import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const MySkill = () => {
 
    return (
        <div id='skill' className='container py-5'>
            <h4><span className='icon-color'>/</span>MY SkILLS</h4>
            <div className="line5">My extensive list of skills</div>
            <div className="row">

            <div className="my-5">
            </div>

                <OwlCarousel className='owl-theme' loop margin={10} dots={false} responsive= {
                {
                    '1':{
                        items: 1
                    },
                    '1025': {
                        items: 3
                    }
                }
                
            } nav>
                    <div className='item col'>
                        <div className="box">
                            <div className="circel">
                                <i className="fa-brands fa-html5"></i>
                            </div>
                            <div className="line5">HTML & CSS</div>
                            <p>Advanced</p>
                            <div className="line7"></div>

                        </div>
                    </div>
                    <div className='item col'>
                    <div className="box">
                            <div className="circel">
                            <i className="fa-brands fa-js"></i>
                            </div>
                            <div className="line5">JavaScript</div>
                            <p>Intermediate</p>
                            <div className="line7"></div>

                        </div>
                    </div>
                    <div className='item col'>
                    <div className="box">
                            <div className="circel">
                            <i className="fa-brands fa-bootstrap"></i>
                            </div>
                            <div className="line5">Bootstrap</div>
                            <p>Advanced</p>
                            <div className="line7"></div>

                        </div>
                    </div>
                    <div className='item col'>
                    <div className="box">
                            <div className="circel">
                            <i className="fa-brands fa-php"></i>
                            </div>
                            <div className="line5">PHP</div>
                            <p>Intermediate</p>
                            <div className="line7"></div>

                        </div>
                    </div>
                    <div className='item col'>
                    <div className="box">
                            <div className="circel">
                            <i className="fa-brands fa-laravel"></i>
                            </div>
                            <div className="line5">LARAVEL</div>
                            <p>Intermediate</p>
                            <div className="line7"></div>

                        </div>
                    </div>
                    <div className='item col'>
                    <div className="box">
                            <div className="circel">
                            <i className="fa-solid fa-c"></i>
                            </div>
                            <div className="line5">C language</div>
                            <p>Intermediate</p>
                            <div className="line7"></div>

                        </div>
                    </div>
                    <div className='item col'>
                    <div className="box">
                            <div className="circel">
                            <i className="fa-brands fa-react"></i>
                            </div>
                            <div className="line5">React JS</div>
                            <p>Intermediate</p>
                            <div className="line7"></div>

                        </div>
                    </div>
                    <div className='item col'>
                    <div className="box">
                            <div className="circel">
                            <i className="fa-brands fa-node-js"></i>
                            </div>
                            <div className="line5">Node.js </div>
                            <p>Beginner</p>
                            <div className="line7"></div>

                        </div>
                    </div>
                    <div className='item col'>
                    <div className="box">
                            <div className="circel">
                            <i className="fa-solid fa-e"></i>
                            </div>
                            <div className="line5">Express.js</div>
                            <p>Beginner</p>
                            <div className="line7"></div>

                        </div>
                    </div>
                    <div className='item col'>
                    <div className="box">
                            <div className="circel">
                            <i className="fa-solid fa-t"></i>
                            </div>
                            <div className="line5">Tailwind css</div>
                            <p>Intermediate</p>
                            <div className="line7"></div>

                        </div>
                    </div>
                    
                </OwlCarousel>
            </div>



        </div>
    )
}

export default MySkill
