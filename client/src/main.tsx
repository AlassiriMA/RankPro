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
    background: linear-gradient(135deg, #4e46e6 0%, #7c3aed 100%);
  }
  
  .bg-gradient-light {
    background: linear-gradient(135deg, rgba(78, 70, 230, 0.08) 0%, rgba(124, 58, 237, 0.08) 100%);
  }
  
  .transition-all {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .pricing-card {
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), 
                box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1), 
                border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform, box-shadow;
  }
  
  .pricing-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 30px -12px rgba(79, 70, 229, 0.25);
  }
  
  .testimonial-slide {
    opacity: 0;
    transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), 
                transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
    position: absolute;
    width: 100%;
    transform: translateY(10px);
  }
  
  .testimonial-slide.active {
    opacity: 1;
    pointer-events: auto;
    position: relative;
    transform: translateY(0);
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
    background: radial-gradient(circle, rgba(79, 70, 229, 0.12) 0%, rgba(139, 92, 246, 0.07) 30%, transparent 70%);
    animation: rotate 30s linear infinite;
  }
  
  .animated-bg::after {
    content: '';
    position: absolute;
    top: -20%;
    right: -20%;
    width: 60%;
    height: 60%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, rgba(79, 70, 229, 0.07) 30%, transparent 70%);
    animation: float 15s ease-in-out infinite alternate;
  }
  
  /* Glass effect */
  .glass-effect {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  
  .card-hover {
    transition: all 0.3s ease;
  }
  
  .card-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px -5px rgba(79, 70, 229, 0.1), 0 10px 10px -5px rgba(79, 70, 229, 0.04);
  }
  
  /* Custom button effects */
  .btn-glow {
    position: relative;
    z-index: 1;
  }
  
  .btn-glow::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 12px;
    background: radial-gradient(ellipse at center, rgba(79, 70, 229, 0.3) 0%, rgba(79, 70, 229, 0) 70%);
    z-index: -1;
  }
  
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  @keyframes float {
    0% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(5deg); }
    100% { transform: translateY(0) rotate(0deg); }
  }
  
  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.05); opacity: 0.8; }
    100% { transform: scale(1); opacity: 1; }
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
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes shimmer {
    0% { background-position: -1000px 0; }
    100% { background-position: 1000px 0; }
  }

  .animate-wave {
    animation: wave 2.5s ease-in-out infinite;
  }

  .animate-fadeIn {
    animation: fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .animate-pulse {
    animation: pulse 2s ease-in-out infinite;
  }
  
  .animate-shimmer {
    background: linear-gradient(
      90deg, 
      rgba(255, 255, 255, 0) 0%, 
      rgba(255, 255, 255, 0.4) 50%, 
      rgba(255, 255, 255, 0) 100%
    );
    background-size: 1000px 100%;
    animation: shimmer 2s infinite linear;
  }
  
  /* Enhance scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgba(79, 70, 229, 0.3);
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(79, 70, 229, 0.5);
  }
  
  /* Text highlight */
  ::selection {
    background: rgba(79, 70, 229, 0.2);
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
