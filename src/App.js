
import './App.css';
import Footer from './comp/Footer';
import Header from './comp/Header';
import AboutMe from './pages/AboutMe';
import ContectUs from './pages/ContectUs';
import MySkill from './pages/MySkill';
import Portfolio from './pages/Portfolio';
import AnimatedCursor from 'react-animated-cursor';

function App() {
  return (
    <>
    <AnimatedCursor
    
    innerSize={8}
    outerSize={50}
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
      <Header />
      <AboutMe />
      <MySkill/>
      <Portfolio/>
      <ContectUs/>
       <Footer/>
  
      
    </>


  );
}

export default App;
