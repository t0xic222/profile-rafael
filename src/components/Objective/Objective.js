import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';

const ObjectiveSection = styled.section`
  padding: 8rem 0;
  background: linear-gradient(to bottom, rgba(11, 11, 59, 0.9), var(--color-bg));
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at bottom right, rgba(255, 0, 228, 0.1), transparent 70%);
    z-index: 1;
  }
`;

const ObjectiveContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const ObjectiveTitle = styled(motion.h2)`
  text-align: center;
  margin-bottom: 4rem;
`;

const ObjectiveContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ObjectiveText = styled(motion.div)`
  @media (max-width: 768px) {
    order: 2;
  }
`;

const ObjectiveParagraph = styled(motion.p)`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: var(--color-text-secondary);
  line-height: 1.8;
`;

const ObjectiveHighlight = styled.span`
  color: var(--color-primary);
  font-weight: 500;
`;

const ObjectiveVisual = styled(motion.div)`
  position: relative;
  height: 400px;
  
  @media (max-width: 768px) {
    order: 1;
    height: 300px;
  }
`;

const ObjectiveCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 2rem;
  border: 1px solid rgba(0, 240, 255, 0.2);
  position: absolute;
  width: 250px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  
  &:nth-child(1) {
    top: 0;
    left: 0;
    z-index: 4;
  }
  
  &:nth-child(2) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }
  
  &:nth-child(3) {
    bottom: 0;
    right: 0;
    z-index: 2;
  }
  
  @media (max-width: 768px) {
    width: 200px;
    
    &:nth-child(1) {
      top: 0;
      left: 10%;
    }
    
    &:nth-child(3) {
      bottom: 0;
      right: 10%;
    }
  }
`;

const CardIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--color-primary), var(--color-secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  color: var(--color-bg);
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.5);
`;

const CardTitle = styled.h4`
  font-family: var(--font-subheading);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
`;

const CardText = styled.p`
  font-size: 0.9rem;
  color: var(--color-text-secondary);
`;

const Objective = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom * 0.2,
        duration: 0.8
      }
    })
  };

  return (
    <ObjectiveSection id="objective" ref={ref}>
      <ObjectiveContainer>
        <ObjectiveTitle
          as={motion.h2}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          Objetivo Profissional
        </ObjectiveTitle>
        
        <ObjectiveContent>
          <ObjectiveText
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <ObjectiveParagraph variants={itemVariants}>
              Busco uma oportunidade para <ObjectiveHighlight>retomar minha carreira como Desenvolvedor Full-Stack Júnior</ObjectiveHighlight>, aplicando meus conhecimentos em JavaScript, ReactJS, Angular e Python.
            </ObjectiveParagraph>
            
            <ObjectiveParagraph variants={itemVariants}>
              Minha experiência prévia em desenvolvimento, enriquecida pela vivência em Suporte Técnico, me proporcionou uma <ObjectiveHighlight>visão completa do ciclo de vida do software</ObjectiveHighlight> e das necessidades do usuário, capacitando-me a criar soluções mais robustas e eficientes.
            </ObjectiveParagraph>
            
            <ObjectiveParagraph variants={itemVariants}>
              Com uma base sólida em desenvolvimento full-stack e uma valiosa experiência adquirida na área de Suporte Técnico, busco agora focar novamente minha carreira no desenvolvimento.
            </ObjectiveParagraph>
            
            <ObjectiveParagraph variants={itemVariants}>
              Almejo uma posição de <ObjectiveHighlight>Desenvolvedor Júnior</ObjectiveHighlight> onde eu possa aplicar minha paixão por codificação e minha habilidade aprofundada de resolução de problemas para contribuir com projetos desafiadores e inovadores.
            </ObjectiveParagraph>
          </ObjectiveText>
          
          <ObjectiveVisual>
            <ObjectiveCard
              custom={0}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ 
                y: -10,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)'
              }}
            >
              <CardIcon>
                <FaCode />
              </CardIcon>
              <CardTitle>Desenvolvimento</CardTitle>
              <CardText>
                Criar soluções web modernas e responsivas com as melhores práticas de codificação.
              </CardText>
            </ObjectiveCard>
            
            <ObjectiveCard
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ 
                y: -10,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)'
              }}
            >
              <CardIcon>
                <FaLaptopCode />
              </CardIcon>
              <CardTitle>Full-Stack</CardTitle>
              <CardText>
                Trabalhar com tecnologias front-end e back-end para criar aplicações completas.
              </CardText>
            </ObjectiveCard>
            
            <ObjectiveCard
              custom={2}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ 
                y: -10,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)'
              }}
            >
              <CardIcon>
                <FaRocket />
              </CardIcon>
              <CardTitle>Crescimento</CardTitle>
              <CardText>
                Evoluir constantemente, aprendendo novas tecnologias e aprimorando habilidades.
              </CardText>
            </ObjectiveCard>
          </ObjectiveVisual>
        </ObjectiveContent>
      </ObjectiveContainer>
    </ObjectiveSection>
  );
};

export default Objective;

