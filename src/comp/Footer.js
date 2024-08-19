import React from 'react'
import img from '../img/rajan.png'
const Footer = () => {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-sm-6">
                <div className="foot1">
                <div className='circel1'><img  className="logo"src={img} alt="" /></div>
                    <div className="foot2">
                        <h1>Rajan</h1>
                    </div>
                </div>
            <div className="icon my-4">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-github"></i>
              </div>    
            </div>
            <div className="col-sm-6">
                <h1>Get in touch <span ><i class="fa-solid fa-arrow-right icon-color"></i></span></h1>
                  <div className="foot3">
                    <div className="foot4">
                        <h5 className='my-4'>EMIAL Me</h5>
                        <h5 className='my-4'>Kumar1234.rk16@gmail.com</h5>
                        
                    </div>
                    <div className="foot4">
                        <h5 className='my-4'>CALL Me</h5>
                        <h5 className='my-4'>7531039778</h5>
                        
                    </div>
                    
                  </div>

            </div>
        </div>
      <hr  className='my'/>
      <div className="text-center">Copyright © Developer Rajan | Designed by Rajan </div>
      <hr  className=''/>
      
    </div>
  )
}

export default Footer
