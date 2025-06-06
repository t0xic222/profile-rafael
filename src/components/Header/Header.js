import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem 0;
  backdrop-filter: blur(10px);
  background: rgba(11, 11, 59, 0.8);
  border-bottom: 1px solid rgba(0, 240, 255, 0.2);
  transition: all 0.3s ease;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      rgba(0, 240, 255, 0) 0%,
      rgba(0, 240, 255, 0.1) 25%, 
      rgba(255, 0, 228, 0.1) 75%,
      rgba(255, 0, 228, 0) 100%
    );
    z-index: -1;
    animation: shimmer 8s infinite linear;
  }
  
  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(motion.div)`
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-primary);
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  
  span {
    color: var(--color-secondary);
  }
  
  &:before {
    content: '<';
    position: absolute;
    left: -20px;
    opacity: 0.7;
    font-size: 1.2rem;
    color: var(--color-primary);
  }
  
  &:after {
    content: '/>';
    position: absolute;
    right: -30px;
    opacity: 0.7;
    font-size: 1.2rem;
    color: var(--color-secondary);
  }
`;

const MenuItems = styled.ul`
  display: flex;
  list-style: none;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 70%;
    height: 100vh;
    background: rgba(11, 11, 59, 0.95);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: right 0.5s ease;
    z-index: 999;
  }
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  
  @media (max-width: 768px) {
    margin: 1.5rem 0;
  }
`;

const MenuLink = styled(Link)`
  font-family: var(--font-subheading);
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text);
  cursor: pointer;
  position: relative;
  padding: 0.5rem 0.8rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: var(--color-primary);
    background: rgba(0, 240, 255, 0.05);
  }
  
  &:hover:before,
  &.active:before {
    transform: scaleX(1);
    transform-origin: left;
  }
  
  &.active {
    color: var(--color-primary);
    background: rgba(0, 240, 255, 0.1);
    box-shadow: 0 0 10px rgba(0, 240, 255, 0.2);
  }
`;

const MobileMenuToggle = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1000;
  padding: 0.5rem;
  border-radius: 50%;
  background: rgba(0, 240, 255, 0.1);
  border: 1px solid rgba(0, 240, 255, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 240, 255, 0.2);
    box-shadow: 0 0 15px rgba(0, 240, 255, 0.5);
  }
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  const logoVariants = {
    hover: {
      textShadow: [
        '0 0 8px rgba(0, 240, 255, 0.7)',
        '0 0 16px rgba(255, 0, 228, 0.7)',
        '0 0 8px rgba(0, 240, 255, 0.7)'
      ],
      scale: 1.05,
      transition: {
        duration: 1.5,
        repeat: Infinity
      }
    }
  };

  return (
    <HeaderContainer 
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      style={{ 
        padding: scrolled ? '0.5rem 0' : '1rem 0',
        boxShadow: scrolled ? '0 5px 15px rgba(0, 0, 0, 0.3)' : 'none'
      }}
    >
      <Nav>
        <Logo 
          variants={logoVariants}
          whileHover="hover"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            closeMenu();
          }}
        >
          Rafael<span>Loding</span>
        </Logo>
        
        <MobileMenuToggle onClick={toggleMenu}>
          {isOpen ? <FaTimes color="var(--color-primary)" /> : <FaBars color="var(--color-primary)" />}
        </MobileMenuToggle>
        
        <MenuItems isOpen={isOpen}>
          <MenuItem>
            <MenuLink 
              to="about" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              onClick={closeMenu}
            >
              Sobre
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink 
              to="experience" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              onClick={closeMenu}
            >
              Experiência
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink 
              to="skills" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              onClick={closeMenu}
            >
              Competências
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink 
              to="objective" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              onClick={closeMenu}
            >
              Objetivo
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink 
              to="contact" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              onClick={closeMenu}
            >
              Contato
            </MenuLink>
          </MenuItem>
        </MenuItems>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

