import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ExperienceSection = styled.section`
  padding: 8rem 0;
  background: linear-gradient(to bottom, var(--color-bg), rgba(11, 11, 59, 0.9));
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at bottom left, rgba(0, 240, 255, 0.1), transparent 70%);
    z-index: 1;
  }
`;

const ExperienceContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const ExperienceTitle = styled(motion.h2)`
  text-align: center;
  margin-bottom: 4rem;
`;

const TimelineContainer = styled.div`
  position: relative;
  margin: 0 auto;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, var(--color-primary), var(--color-secondary));
    z-index: 1;
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 40px;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:nth-child(odd) {
    .timeline-content {
      margin-left: auto;
      
      @media (max-width: 768px) {
        margin-left: 0;
      }
    }
  }
`;

const TimelineDate = styled(motion.div)`
  width: 120px;
  height: 40px;
  background: linear-gradient(45deg, var(--color-primary), var(--color-secondary));
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-weight: 600;
  color: var(--color-bg);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.5);
  
  @media (max-width: 768px) {
    left: -20px;
    transform: translateX(-50%);
    width: 100px;
    height: 35px;
    font-size: 0.9rem;
  }
`;

const TimelineDot = styled(motion.div)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ active }) => active ? 'var(--color-secondary)' : 'var(--color-primary)'};
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  box-shadow: 0 0 10px ${({ active }) => active ? 'rgba(255, 0, 228, 0.7)' : 'rgba(0, 240, 255, 0.7)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    left: -20px;
  }
  
  &:hover {
    transform: translateX(-50%) scale(1.2);
  }
`;

const TimelineContent = styled(motion.div)`
  width: 45%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 2rem;
  border: 1px solid rgba(0, 240, 255, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  margin-top: 60px;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    width: 100%;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
  }
`;

const CompanyName = styled.h3`
  font-family: var(--font-subheading);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
`;

const JobTitle = styled.h4`
  font-family: var(--font-subheading);
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--color-text);
`;

const JobDescription = styled.p`
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
`;

const Experience = () => {
  const [activeJob, setActiveJob] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const experienceData = [
    {
      id: 1,
      company: 'CWB Game Studio',
      title: 'Desenvolvedor Web (Full-Stack)',
      period: '2021-2023',
      description: 'Desenvolvimento de interfaces web responsivas utilizando HTML5, CSS3, JavaScript e ReactJS. Implementação de funcionalidades back-end e integração com APIs.'
    },

    { 
      id: 3,
      company: 'Grupo Ideal Trends',
      title: 'Suporte Técnico Nível 2',
      period: '2023-2024',
      description: 'Suporte técnico avançado, resolução de problemas complexos em sistemas, gerenciamento de redes e administração de sistemas Windows.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const handleDotClick = (id) => {
    setActiveJob(id === activeJob ? null : id);
  };

  return (
    <ExperienceSection id="experience" ref={ref}>
      <ExperienceContainer>
        <ExperienceTitle
          as={motion.h2}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          Experiência Profissional
        </ExperienceTitle>
        
        <TimelineContainer
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {experienceData.map((job, index) => (
            <TimelineItem key={job.id} variants={itemVariants}>
              <TimelineDate variants={itemVariants}>
                {job.period}
              </TimelineDate>
              
              <TimelineDot 
                active={activeJob === job.id}
                onClick={() => handleDotClick(job.id)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
              
              <TimelineContent
                variants={itemVariants}
                whileHover={{ 
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
                  y: -5
                }}
                transition={{ duration: 0.3 }}
              >
                <CompanyName>{job.company}</CompanyName>
                <JobTitle>{job.title}</JobTitle>
                <JobDescription>{job.description}</JobDescription>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience;

