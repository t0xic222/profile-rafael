import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaHeart, FaArrowUp } from 'react-icons/fa';

const FooterSection = styled.footer`
  padding: 3rem 0;
  background: rgba(6, 6, 30, 0.9);
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(0, 240, 255, 0.2);
`;

const FooterContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterLogo = styled(motion.div)`
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 2rem;
  
  span {
    color: var(--color-secondary);
  }
`;

const FooterNav = styled.nav`
  margin-bottom: 2rem;
`;

const FooterNavList = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterNavItem = styled.li`
  margin: 0 1rem 1rem;
  
  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const FooterNavLink = styled(Link)`
  font-family: var(--font-subheading);
  font-size: 1rem;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--color-primary);
  }
`;

const FooterDivider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--color-primary), transparent);
  margin: 1rem 0 2rem;
`;

const FooterCopyright = styled.p`
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  text-align: center;
  margin-bottom: 1rem;
  
  a {
    color: var(--color-primary);
    transition: all 0.3s ease;
    
    &:hover {
      color: var(--color-secondary);
    }
  }
`;

const HeartIcon = styled(FaHeart)`
  color: var(--color-secondary);
  margin: 0 0.3rem;
  animation: pulse 1.5s infinite;
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const ScrollToTop = styled(motion.div)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--color-primary), var(--color-secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-bg);
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 100;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  transform: ${({ visible }) => (visible ? 'translateY(0)' : 'translateY(100px)')};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  }
`;

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const logoVariants = {
    hover: {
      textShadow: [
        '0 0 8px rgba(0, 240, 255, 0.7)',
        '0 0 16px rgba(255, 0, 228, 0.7)',
        '0 0 8px rgba(0, 240, 255, 0.7)'
      ],
      transition: {
        duration: 1.5,
        repeat: Infinity
      }
    }
  };

  return (
    <FooterSection>
      <FooterContainer>
        <FooterLogo
          variants={logoVariants}
          whileHover="hover"
        >
          Rafael<span>Loding</span>
        </FooterLogo>
        
        <FooterNav>
          <FooterNavList>
            <FooterNavItem>
              <FooterNavLink
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Início
              </FooterNavLink>
            </FooterNavItem>
            <FooterNavItem>
              <FooterNavLink
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Sobre
              </FooterNavLink>
            </FooterNavItem>
            <FooterNavItem>
              <FooterNavLink
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Experiência
              </FooterNavLink>
            </FooterNavItem>
            <FooterNavItem>
              <FooterNavLink
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Competências
              </FooterNavLink>
            </FooterNavItem>
            <FooterNavItem>
              <FooterNavLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contato
              </FooterNavLink>
            </FooterNavItem>
          </FooterNavList>
        </FooterNav>
        
        <FooterDivider />
        
        <FooterCopyright>
          &copy; {new Date().getFullYear()} Rafael Cardoso Loding. Todos os direitos reservados.
        </FooterCopyright>
        <FooterCopyright>
          Desenvolvido com <HeartIcon /> usando React e tecnologias modernas.
        </FooterCopyright>
      </FooterContainer>
      
      <ScrollToTop
        visible={showScrollTop}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowUp />
      </ScrollToTop>
    </FooterSection>
  );
};

export default Footer;

