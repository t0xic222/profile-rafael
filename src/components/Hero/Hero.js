import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const HeroSection = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--color-text);
  font-family: var(--font-subheading);
  font-weight: 500;
  
  &:after {
    display: none;
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 2rem;
  color: var(--color-text-secondary);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  margin-top: 1rem;
`;

const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

// Componente de partículas 3D
const Stars = (props) => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 50;
    ref.current.rotation.y -= delta / 75;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#00F0FF"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const Hero = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.2
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.4
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.6
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        delay: 0.8
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 0 15px rgba(0, 240, 255, 0.7)',
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  };

  return (
    <HeroSection id="home">
      <CanvasContainer>
        <Canvas camera={{ position: [0, 0, 1] }} onCreated={({ gl, events }) => {
          // Desabilitar todos os eventos do mouse
          events.disconnect();
        }}>
          <Stars />
        </Canvas>
      </CanvasContainer>
      
      <HeroContent>
        <Title
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Rafael Cardoso Loding
        </Title>
        
        <Subtitle
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          Desenvolvedor Full-Stack
        </Subtitle>
        
        <Description
          variants={descriptionVariants}
          initial="hidden"
          animate="visible"
        >
          Desenvolvedor apaixonado por criar soluções web inovadoras, 
          combinando experiência em desenvolvimento front-end e back-end 
          com conhecimentos em suporte técnico para entregar produtos 
          de alta qualidade.
        </Description>
        
        <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
          <CTAButton
            as={motion.button}
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            Conheça meu trabalho
          </CTAButton>
        </Link>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;

