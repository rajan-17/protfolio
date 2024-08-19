import React from 'react'

const ContectUs = () => {
  return (
    <div className="about-color">

    <div className='container'>
        <div className="row">
            <div className="col-sm-6">
            <div className="line my-5"></div>
            <div className="line5">Interested in <br />working together?<br />
            Let’s talk <span ><i class="fa-solid fa-arrow-right icon-color"></i></span></div>
            </div>
            <div className="col-sm-6">
              <form action="">
                <input type="text" className='contactus my-3' placeholder='Enter your name' />
                <input type="text" className='contactus my-3' placeholder='Your Email address' />
               <textarea name=""  className='contactus my-3' placeholder='Describe your project' id=""></textarea>
              </form>
              <div className="my-5">

                <h1 >Contact me <span ><i class="fa-solid fa-arrow-right icon-color"></i></span></h1>
                <div className="line8"></div>
              </div>
            </div>
        </div>
      
    </div>
    </ div>
  )
}

export default ContectUs
