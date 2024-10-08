import React from 'react'

const ContectUs = () => {
  return (
    <div id='contact' className="about-color ">

      <div className='container py-5'>
        <div className="row">
          <div className="col-sm-6">
            <div className="line my-5"></div>
            <div className="line5" data-aos="fade-left">Interested in <br />working together?<br />
              Let’s talk <span ><i className="fa-solid fa-arrow-right icon-color"></i></span></div>
          </div>
          <div className="col-sm-6">
            <form action="">
              <input type="text" data-aos="fade-left" className='contactus ' placeholder='Enter your name' />
              <input type="text" data-aos="fade-left" className='contactus ' placeholder='Your Email address' />
              <textarea name="" data-aos="fade-left" className='contactus ' placeholder='Describe your project' style={{ height: 150 }}></textarea>
            <div className="my-3">

              <p className='hovertext'>Contact me <span ><i className="fa-solid fa-arrow-right icon-color"></i></span></p>
              <div className="line8 "></div>
            </div>
                

            </form>
          </div>
        </div>

      </div>
    </ div>
  )
}

export default ContectUs
