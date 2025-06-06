import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header/Header';
//import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Objective from './components/Objective/Objective';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const AppContainer = styled.div`
  position: relative;
`;

const LoadingScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-bg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.5s ease-out;
  opacity: ${({ isLoading }) => (isLoading ? '1' : '0')};
  visibility: ${({ isLoading }) => (isLoading ? 'visible' : 'hidden')};
`;

const LoadingLogo = styled.div`
  font-family: var(--font-heading);
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
`;

const LoadingBar = styled.div`
  width: 200px;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
    animation: loading 2s infinite;
    
    @keyframes loading {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
  }
`;

const CursorEffect = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--color-primary), transparent 70%);
  position: fixed;
  pointer-events: none;
  mix-blend-mode: screen;
  z-index: 9999;
  opacity: 0.7;
  filter: blur(5px);
  transform: translate(-50%, -50%);
  transition: width 0.2s, height 0.2s;
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Simular tempo de carregamento
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = () => {
      setIsHovering(true);
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseover', handleMouseOver);
      el.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseover', handleMouseOver);
        el.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  return (
    <AppContainer>
      <GlobalStyles />
      
      <LoadingScreen isLoading={isLoading}>
        <LoadingLogo>Rafael Loding</LoadingLogo>
        <LoadingBar />
      </LoadingScreen>
      
      <CursorEffect 
        style={{ 
          left: `${cursorPosition.x}px`, 
          top: `${cursorPosition.y}px`,
          width: isHovering ? '40px' : '20px',
          height: isHovering ? '40px' : '20px'
        }} 
      />
      
      <Header />
      {/* <Hero /> */}
      <About />
      <Experience />
      <Skills />
      <Objective />
      <Contact />
      <Footer />
    </AppContainer>
  );
}

export default App;

