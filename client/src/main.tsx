import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add custom styles for the project
const style = document.createElement('style');
style.textContent = `
  body {
    font-family: 'Inter', sans-serif;
    scroll-behavior: smooth;
  }
  
  .bg-gradient {
    background: linear-gradient(135deg, #4F46E5 0%, #8B5CF6 100%);
  }
  
  .bg-gradient-light {
    background: linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  }
  
  .transition-all {
    transition: all 0.3s ease;
  }
  
  .pricing-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .pricing-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  
  .testimonial-slide {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    pointer-events: none;
    position: absolute;
    width: 100%;
  }
  
  .testimonial-slide.active {
    opacity: 1;
    pointer-events: auto;
    position: relative;
  }
  
  /* Animated background */
  .animated-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    z-index: -1;
    overflow: hidden;
  }
  
  .animated-bg::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, rgba(139, 92, 246, 0.05) 30%, transparent 70%);
    animation: rotate 30s linear infinite;
  }
  
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes wave {
    0% { transform: rotate(0.0deg); }
    10% { transform: rotate(14.0deg); }
    20% { transform: rotate(-8.0deg); }
    30% { transform: rotate(14.0deg); }
    40% { transform: rotate(-4.0deg); }
    50% { transform: rotate(10.0deg); }
    60% { transform: rotate(0.0deg); }
    100% { transform: rotate(0.0deg); }
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  .animate-wave {
    animation: wave 2.5s ease-in-out infinite;
  }

  .animate-fadeIn {
    animation: fadeIn 0.5s ease-in;
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
