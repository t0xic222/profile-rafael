import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = styled.section`
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(106, 13, 173, 0.1), transparent 70%);
    z-index: 1;
  }
`;

const AboutContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutContent = styled.div`
  @media (max-width: 768px) {
    order: 2;
  }
`;

const AboutTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const AboutText = styled(motion.p)`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: var(--color-text-secondary);
  line-height: 1.8;
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  
  @media (max-width: 768px) {
    order: 1;
    margin-bottom: 2rem;
  }
`;

const ProfileImage = styled(motion.div)`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  background: linear-gradient(45deg, var(--color-primary), var(--color-secondary));
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  
  &:before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    z-index: 1;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/images/coding.gif') center center/cover no-repeat;
    mix-blend-mode: normal;
    opacity: 1;
  }
`;

const GlowingOrb = styled(motion.div)`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--color-primary), transparent 70%);
  filter: blur(20px);
  opacity: 0.5;
`;

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1
      }
    }
  };

  const orbVariants = {
    animate: {
      x: [0, 30, 0, -30, 0],
      y: [0, -30, 0, 30, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AboutSection id="about" ref={ref}>
      <AboutContainer
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <AboutContent>
          <AboutTitle variants={itemVariants}>Sobre Mim</AboutTitle>
          <AboutText variants={itemVariants}>
            Meu nome é Rafael e iniciei minha carreira como Desenvolvedor Web, onde tive a oportunidade de trabalhar com tecnologias como HTML5, CSS3, JavaScript e ReactJS.
          </AboutText>
          <AboutText variants={itemVariants}>
            Posteriormente, aceitei o desafio de atuar na área de Suporte Técnico (Nível 1 e 2), uma experiência que se revelou fundamental. Nesse período, pude entender na prática as dores e as necessidades dos usuários finais, diagnosticar problemas complexos em sistemas no ar e compreender o impacto real da qualidade do código no dia a dia de uma operação.
          </AboutText>
          <AboutText variants={itemVariants}>
            Agora, meu objetivo é retornar à minha paixão original, o desenvolvimento de software, trazendo comigo uma bagagem muito mais completa. Estou pronto para aplicar não apenas minhas competências técnicas em Python, JavaScript e outras tecnologias do ecossistema full-stack, mas também uma visão estratégica sobre como construir produtos mais intuitivos, estáveis e fáceis de manter.
          </AboutText>
          <AboutText variants={itemVariants}>
            Sou um profissional proativo, com excelente capacidade de comunicação e focado em soluções.
          </AboutText>
        </AboutContent>
        
        <ImageContainer variants={itemVariants}>
          <ProfileImage
            variants={imageVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
          <GlowingOrb
            variants={orbVariants}
            animate="animate"
            style={{ top: '10%', right: '10%' }}
          />
          <GlowingOrb
            variants={orbVariants}
            animate="animate"
            style={{ bottom: '10%', left: '10%', background: 'radial-gradient(circle, var(--color-secondary), transparent 70%)' }}
          />
        </ImageContainer>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;

