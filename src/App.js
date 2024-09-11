
import './App.css';
import Canvas from './comp/Canvas';
import Footer from './comp/Footer';
import Header from './comp/Header';
import AboutMe from './pages/AboutMe';
import ContectUs from './pages/ContectUs';
import MySkill from './pages/MySkill';
import Portfolio from './pages/Portfolio';
import AnimatedCursor from 'react-animated-cursor';
import 'aos/dist/aos.css'
import Aos from "aos";
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  useEffect(()=>{
    Aos.init({
      offset: -500,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  },[])

  return (
    <>  <Router>

      <AnimatedCursor

innerSize={8}
outerSize={0}
color='225, 225, 225'
outerAlpha={0.2}
innerScale={1}
        outerScale={2}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          
        ]}
        />
      <div className=" position-relative">
        <Canvas />

      </div>
      <Routes>
      <Route exact path='/' element={  <Header />}> </Route>
      

      </Routes>
      <div className=" maia-B">

        <AboutMe />
        <MySkill />
        <Portfolio />
     
        <ContectUs />
        <Footer />
      </div>

        </Router>

    </>


  );
}

export default App;
