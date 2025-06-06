import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 8rem 0;
  background: linear-gradient(to top, var(--color-bg), rgba(11, 11, 59, 0.9));
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(0, 240, 255, 0.1), transparent 70%);
    z-index: 1;
  }
`;

const ContactContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const ContactTitle = styled(motion.h2)`
  text-align: center;
  margin-bottom: 4rem;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled(motion.form)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 2.5rem;
  border: 1px solid rgba(0, 240, 255, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const FormTitle = styled.h3`
  font-family: var(--font-subheading);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--color-primary);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-family: var(--font-subheading);
  color: var(--color-text);
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 240, 255, 0.2);
  border-radius: 5px;
  color: var(--color-text);
  font-family: var(--font-body);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 10px rgba(0, 240, 255, 0.3);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 240, 255, 0.2);
  border-radius: 5px;
  color: var(--color-text);
  font-family: var(--font-body);
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 10px rgba(0, 240, 255, 0.3);
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  margin-top: 1rem;
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContactInfoItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 2rem;
  border: 1px solid rgba(0, 240, 255, 0.2);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border-color: var(--color-primary);
  }
`;

const ContactIconContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--color-primary), var(--color-secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  font-size: 1.5rem;
  color: var(--color-bg);
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.5);
`;

const ContactInfoContent = styled.div`
  flex: 1;
`;

const ContactInfoTitle = styled.h4`
  font-family: var(--font-subheading);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
`;

const ContactInfoText = styled.p`
  color: var(--color-text-secondary);
`;

const SocialLinks = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 1.5rem;
  color: var(--color-primary);
  border: 1px solid rgba(0, 240, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(45deg, var(--color-primary), var(--color-secondary));
    color: var(--color-bg);
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementaria a lógica para enviar o formulário
    console.log(formData);
    alert('Mensagem enviada com sucesso!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

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

  return (
    <ContactSection id="contact" ref={ref}>
      <ContactContainer>
        <ContactTitle
          as={motion.h2}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          Entre em Contato
        </ContactTitle>
        
        <ContactContent>
          <ContactForm
            as={motion.form}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            onSubmit={handleSubmit}
          >
            <FormTitle>Envie uma mensagem</FormTitle>
            
            <FormGroup as={motion.div} variants={itemVariants}>
              <FormLabel htmlFor="name">Nome</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup as={motion.div} variants={itemVariants}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup as={motion.div} variants={itemVariants}>
              <FormLabel htmlFor="subject">Assunto</FormLabel>
              <FormInput
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup as={motion.div} variants={itemVariants}>
              <FormLabel htmlFor="message">Mensagem</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <SubmitButton
              as={motion.button}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 0 15px rgba(0, 240, 255, 0.7)'
              }}
              whileTap={{ scale: 0.98 }}
              type="submit"
            >
              Enviar Mensagem
            </SubmitButton>
          </ContactForm>
          
          <ContactInfo
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <ContactInfoItem variants={itemVariants}>
              <ContactIconContainer>
                <FaPhone />
              </ContactIconContainer>
              <ContactInfoContent>
                <ContactInfoTitle>Telefone</ContactInfoTitle>
                <ContactInfoText>(11) 98214-0881</ContactInfoText>
              </ContactInfoContent>
            </ContactInfoItem>
            
            <ContactInfoItem variants={itemVariants}>
              <ContactIconContainer>
                <FaEnvelope />
              </ContactIconContainer>
              <ContactInfoContent>
                <ContactInfoTitle>Email</ContactInfoTitle>
                <ContactInfoText>rafaelloding@hotmail.com</ContactInfoText>
              </ContactInfoContent>
            </ContactInfoItem>
            
            <ContactInfoItem variants={itemVariants}>
              <ContactIconContainer>
                <FaMapMarkerAlt />
              </ContactIconContainer>
              <ContactInfoContent>
                <ContactInfoTitle>Localização</ContactInfoTitle>
                <ContactInfoText>Alameda dos Ciprestes, 380 - Vitassay - Boituva - SP</ContactInfoText>
              </ContactInfoContent>
            </ContactInfoItem>
            
            <SocialLinks as={motion.div} variants={itemVariants}>
              <SocialLink 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: 'var(--color-primary)',
                  color: 'var(--color-bg)'
                }}
              >
                <FaLinkedin />
              </SocialLink>
              <SocialLink 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: 'var(--color-primary)',
                  color: 'var(--color-bg)'
                }}
              >
                <FaGithub />
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;

