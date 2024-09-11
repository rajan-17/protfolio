import React from 'react'

const AboutMe = () => {


  return (
    <div id='about' className="about-color  ">

      <div className='container my-5'>

        <div className="row">
          <div className="col-lg-6 about" >
            <h4 data-aos="fade-left" ><span className='icon-color'>/</span>About me</h4>
            <div className="line5 my-4" data-aos="fade-left"> <p>Building Web <br />Solutions with Passion</p></div>
            <p data-aos="fade-left">Since starting my journey in web development, I’ve dedicated myself to creating high-quality, user-friendly websites. Each project reflects my commitment to delivering elegant and effective digital solutions.</p>
          </div>
          <div className="col-lg-6">
            <div className="job">
              <div className="year">
                <div className="year1" data-aos="fade-left">1</div>
                <div className="year2" data-aos="fade-left">Years of <br />experience</div>
              </div>
              <div className="year">
                <div className="year1" data-aos="fade-left">3</div>
                <div className="year2" data-aos="fade-left">Successful<br />projects</div>
              </div>


            </div>
            <div className="line6 my-5" data-aos="fade-left"><p>With a year of immersive experience in web development, I’ve completed several projects that showcase my ability to create clean, effective, and user-friendly websites. I’m dedicated to bringing fresh ideas and high standards to every project I undertake</p></div>


          </div>
        </div>
        < hr className='line4' />

        <div className="row">
          <div className="col-sm-4 col company">Previously worked on : </div>
          <div className="col-sm-4 col company">Tv100 News</div>
          <div className="col-sm-4 col company">Code lipi Pvt Ltd </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
