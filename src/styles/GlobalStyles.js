import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=Roboto:wght@100;300;400;500;700;900&display=swap');

  :root {
    --color-bg: #0B0B3B;
    --color-primary: #00F0FF;
    --color-secondary: #FF00E4;
    --color-accent: #6A0DAD;
    --color-text: #FFFFFF;
    --color-text-secondary: #E0E0E0;
    
    --font-heading: 'Orbitron', sans-serif;
    --font-subheading: 'Rajdhani', sans-serif;
    --font-body: 'Roboto', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-body);
    background-color: var(--color-bg);
    color: var(--color-text);
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  h1 {
    font-size: 3.5rem;
    background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
  }

  h2 {
    font-size: 2.5rem;
    color: var(--color-primary);
    position: relative;
    margin-bottom: 2rem;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 4px;
      background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
    }
  }

  h3 {
    font-size: 1.8rem;
    color: var(--color-text);
  }

  p {
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      color: var(--color-secondary);
      text-shadow: 0 0 8px var(--color-secondary);
    }
  }

  button {
    font-family: var(--font-subheading);
    background: linear-gradient(45deg, var(--color-primary), var(--color-secondary));
    border: none;
    color: var(--color-bg);
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: all 0.6s ease;
    }
    
    &:hover:before {
      left: 100%;
    }
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
  }

  section {
    padding: 5rem 0;
    position: relative;
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(var(--color-primary), var(--color-secondary));
    border-radius: 4px;
  }

  /* Responsive Typography */
  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    
    h2 {
      font-size: 2rem;
    }
    
    h3 {
      font-size: 1.5rem;
    }
  }
`;

export default GlobalStyles;

