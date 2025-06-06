// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import {
//   FaHtml5, FaCss3Alt, FaReact, FaAngular, FaPython,
//   FaJs, FaWindows, FaNetworkWired, FaServer, FaTools, FaFileAlt
// } from 'react-icons/fa';
// import { SiJira } from 'react-icons/si';

// const SkillsSection = styled.section`
//   padding: 8rem 0;
//   position: relative;
//   overflow: hidden;
  
//   &:before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: radial-gradient(circle at center, rgba(255, 0, 228, 0.05), transparent 70%);
//     z-index: 1;
//   }
// `;

// const SkillsContainer = styled.div`
//   width: 90%;
//   max-width: 1200px;
//   margin: 0 auto;
//   position: relative;
//   z-index: 2;
// `;

// const SkillsTitle = styled(motion.h2)`
//   text-align: center;
//   margin-bottom: 4rem;
// `;

// const SkillsFilterContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 3rem;
//   flex-wrap: wrap;
// `;

// const FilterButton = styled(motion.button)`
//   background: ${({ active }) => active ? 
//     'linear-gradient(45deg, var(--color-primary), var(--color-secondary))' : 
//     'rgba(255, 255, 255, 0.05)'};
//   color: ${({ active }) => active ? 'var(--color-bg)' : 'var(--color-text)'};
//   border: 1px solid ${({ active }) => active ? 
//     'transparent' : 
//     'rgba(0, 240, 255, 0.2)'};
//   padding: 0.8rem 1.5rem;
//   margin: 0 0.5rem 1rem;
//   border-radius: 30px;
//   font-family: var(--font-subheading);
//   font-weight: 500;
//   cursor: pointer;
//   transition: all 0.3s ease;
  
//   &:hover {
//     transform: translateY(-3px);
//     box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
//   }
// `;

// const SkillsGrid = styled(motion.div)`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//   gap: 2rem;
// `;

// const SkillCard = styled(motion.div)`
//   background: rgba(255, 255, 255, 0.05);
//   backdrop-filter: blur(10px);
//   border-radius: 10px;
//   padding: 2rem;
//   border: 1px solid rgba(0, 240, 255, 0.2);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   transition: all 0.3s ease;
//   position: relative;
//   overflow: hidden;
//   height: 200px;
//   justify-content: center;
  
//   &:before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 3px;
//     background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
//   }
  
//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
//     border-color: var(--color-primary);
//   }
// `;

// const IconContainer = styled.div`
//   font-size: 4rem;
//   margin-bottom: 1.5rem;
//   color: var(--color-primary);
//   position: relative;
  
//   &:after {
//     content: '';
//     position: absolute;
//     width: 70px;
//     height: 70px;
//     border-radius: 50%;
//     background: radial-gradient(circle, rgba(0, 240, 255, 0.2), transparent 70%);
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     z-index: -1;
//   }
// `;

// const SkillName = styled.h3`
//   font-family: var(--font-subheading);
//   font-size: 1.3rem;
//   margin-bottom: 1rem;
//   color: var(--color-text);
// `;

// const SkillLevel = styled.div`
//   width: 100%;
//   height: 8px;
//   background: rgba(255, 255, 255, 0.1);
//   border-radius: 4px;
//   overflow: hidden;
//   margin-bottom: 0.5rem;
// `;

// const SkillLevelFill = styled(motion.div)`
//   height: 100%;
//   background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
//   border-radius: 4px;
// `;

// const SkillLevelText = styled.p`
//   font-size: 0.9rem;
//   color: var(--color-text-secondary);
// `;

// const Skills = () => {
//   const [filter, setFilter] = useState('all');
//   const [ref, inView] = useInView({
//     threshold: 0.1,
//     triggerOnce: true
//   });

//   const skillsData = [
//     {
//       id: 1,
//       name: 'HTML5',
//       level: 90,
//       category: 'frontend',
//       icon: <FaHtml5 />
//     },
//     {
//       id: 2,
//       name: 'CSS3',
//       level: 85,
//       category: 'frontend',
//       icon: <FaCss3Alt />
//     },
//     {
//       id: 3,
//       name: 'JavaScript',
//       level: 80,
//       category: 'frontend',
//       icon: <FaJs />
//     },
//     {
//       id: 4,
//       name: 'ReactJS',
//       level: 75,
//       category: 'frontend',
//       icon: <FaReact />
//     },
//     {
//       id: 5,
//       name: 'AngularJS',
//       level: 65,
//       category: 'frontend',
//       icon: <FaAngular />
//     },
//     {
//       id: 6,
//       name: 'Python',
//       level: 70,
//       category: 'backend',
//       icon: <FaPython />
//     },
//     {
//       id: 7,
//       name: 'Microsoft Office',
//       level: 85,
//       category: 'extras',
//       icon: <FaFileAlt />
//     },
//     {
//       id: 8,
//       name: 'Hardware',
//       level: 80,
//       category: 'extras',
//       icon: <FaTools />
//     },
//     {
//       id: 9,
//       name: 'Software',
//       level: 85,
//       category: 'extras',
//       icon: <FaWindows />
//     },
//     {
//       id: 10,
//       name: 'Sistema Jira',
//       level: 75,
//       category: 'extras',
//       icon: <SiJira />
//     },
//     {
//       id: 11,
//       name: 'Sistema Windows',
//       level: 90,
//       category: 'extras',
//       icon: <FaWindows />
//     },
//     {
//       id: 12,
//       name: 'Gerenciamento de rede',
//       level: 60,
//       category: 'extras',
//       icon: <FaNetworkWired />
//     }
//   ];

//   const filteredSkills = filter === 'all' 
//     ? skillsData 
//     : skillsData.filter(skill => skill.category === filter);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5
//       }
//     }
//   };

//   return (
//     <SkillsSection id="skills" ref={ref}>
//       <SkillsContainer>
//         <SkillsTitle
//           as={motion.h2}
//           initial={{ opacity: 0, y: -20 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
//           transition={{ duration: 0.8 }}
//         >
//           Competências
//         </SkillsTitle>
        
//         <SkillsFilterContainer>
//           <FilterButton
//             active={filter === 'all'}
//             onClick={() => setFilter('all')}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Todas
//           </FilterButton>
//           <FilterButton
//             active={filter === 'frontend'}
//             onClick={() => setFilter('frontend')}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Frontend
//           </FilterButton>
//           <FilterButton
//             active={filter === 'backend'}
//             onClick={() => setFilter('backend')}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Backend
//           </FilterButton>
//           <FilterButton
//             active={filter === 'extras'}
//             onClick={() => setFilter('extras')}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Extras
//           </FilterButton>
//         </SkillsFilterContainer>
        
//         <SkillsGrid
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//         >
//           {filteredSkills.map((skill) => (
//             <SkillCard
//               key={skill.id}
//               variants={itemVariants}
//               whileHover={{ 
//                 y: -10,
//                 boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)'
//               }}
//             >
//               <IconContainer>{skill.icon}</IconContainer>
//               <SkillName>{skill.name}</SkillName>
//             </SkillCard>
//           ))}
//         </SkillsGrid>
//       </SkillsContainer>
//     </SkillsSection>
//   );
// };

// export default Skills;



