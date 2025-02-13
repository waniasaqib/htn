import React from 'react';
import { motion } from 'framer-motion';
import fullHeartImage from "../assets/filled-heart.png";
import emptyHeartImage from "../assets/empty-heart.png";
import { HeartAnimationProps } from '../types/props';

const HeartAnimation: React.FC<HeartAnimationProps> = ({ 
  position, 
  size = "w-10",
  type = "full",
  animationDelay = 0 
}) => {
  const baseAnimation = {
    opacity: [0.5, 0.7, 0.5],
    scale: [1, 1.15, 1],
    y: [0, -10, 0],
    rotate: [-5, 5, -5]
  };

  const baseTransition = {
    opacity: { duration: 2 + animationDelay, repeat: Infinity },
    scale: { duration: 2 + animationDelay, repeat: Infinity },
    y: { duration: 4 + animationDelay, repeat: Infinity, ease: "easeInOut" },
    rotate: { duration: 6 + animationDelay, repeat: Infinity, ease: "easeInOut" }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={baseAnimation}
      transition={baseTransition}
      className={`absolute ${position} overflow-hidden`}
    >
      <img 
        src={type === 'full' ? fullHeartImage : emptyHeartImage}
        alt={`${type} heart`}
        className={size}
      />
    </motion.div>
  );
};

interface HeartConfig {
  position: string;
  size: string;
  type: 'full' | 'empty';
  delay: number;
}

const FloatingHeartsBackground: React.FC = () => {
  const hearts: HeartConfig[] = [
    { position: "top-32 left-20", size: "w-10", type: "full", delay: 0 },
    { position: "bottom-20 right-24", size: "w-14", type: "empty", delay: 0.5 },
    { position: "top-10 right-40", size: "w-12", type: "empty", delay: 1 },
    { position: "bottom-40 left-32", size: "w-8", type: "full", delay: 1.5 },
    { position: "top-48 left-10", size: "w-8", type: "full", delay: 2 },
    { position: "bottom-32 right-10", size: "w-10", type: "empty", delay: 2.5 },
    { position: "top-20 right-10", size: "w-12", type: "full", delay: 3 },
    { position: "top-20 left-0", size: "w-10", type: "empty", delay: 3.5 },
    { position: "top-96 left-32", size: "w-10", type: "empty", delay: 4 },
    { position: "top-80 right-16", size: "w-12", type: "full", delay: 4.5 },
    { position: "-bottom-20 left-20", size: "w-10", type: "empty", delay: 5 },
    { position: "-bottom-56 left-24", size: "w-12", type: "full", delay: 5.5 },
    { position: "-bottom-16 right-10", size: "w-10", type: "full", delay: 6 },
    { position: "-bottom-80 right-24", size: "w-20", type: "empty", delay: 3.5 },
    { position: "-bottom-[40rem] right-10", size: "w-10", type: "full", delay: 9 },
    { position: "-bottom-[30rem] right-24", size: "w-20", type: "full", delay: 2.5 },
    { position: "-bottom-[50rem] right-10", size: "w-12", type: "empty", delay: 8 },
    { position: "-bottom-[60rem] right-24", size: "w-14", type: "full", delay: 1.5 },
    { position: "-bottom-[65rem] right-10", size: "w-12", type: "empty", delay: 5.5 },
    { position: "bottom-96 right-24", size: "w-14", type: "empty", delay: 0.5 },
    { position: "-bottom-[40rem] left-10", size: "w-10", type: "full", delay: 9 },
    { position: "-bottom-[30rem] left-24", size: "w-20", type: "full", delay: 2.5 },
    { position: "-bottom-[50rem] left-10", size: "w-12", type: "empty", delay: 8 },
    { position: "-bottom-[60rem] left-24", size: "w-14", type: "full", delay: 1.5 },
    { position: "-bottom-[65rem] left-15", size: "w-12", type: "empty", delay: 5.5 },
    { position: "-bottom-[120rem] right-10", size: "w-12", type: "empty", delay: 8 },
    { position: "-bottom-[115rem] right-24", size: "w-14", type: "full", delay: 1.5 },
    { position: "-bottom-[110rem] right-10", size: "w-12", type: "empty", delay: 5.5 },
    { position: "-bottom-[125rem] right-24", size: "w-14", type: "empty", delay: 0.5 },
    { position: "-bottom-[100rem] left-10", size: "w-10", type: "full", delay: 9 },
    { position: "-bottom-[120rem] left-24", size: "w-20", type: "full", delay: 2.5 },
    { position: "-bottom-[110rem] left-10", size: "w-12", type: "empty", delay: 8 },
    { position: "-bottom-[125rem] left-24", size: "w-14", type: "full", delay: 1.5 },
    { position: "-bottom-[115rem] left-15", size: "w-12", type: "empty", delay: 5.5 },
    { position: "-bottom-[100rem] right-10", size: "w-12", type: "empty", delay: 8 },
    { position: "-bottom-[90rem] right-24", size: "w-14", type: "full", delay: 1.5 },
    { position: "-bottom-[85rem] right-10", size: "w-12", type: "empty", delay: 5.5 },
    { position: "-bottom-[75rem] right-24", size: "w-14", type: "empty", delay: 0.5 },
    { position: "-bottom-[100rem] left-10", size: "w-10", type: "full", delay: 9 },
    { position: "-bottom-[90rem] left-24", size: "w-20", type: "full", delay: 2.5 },
    { position: "-bottom-[85rem] left-10", size: "w-12", type: "empty", delay: 8 },
    { position: "-bottom-[75rem] left-24", size: "w-14", type: "full", delay: 1.5 },
    { position: "-bottom-[90rem] left-15", size: "w-12", type: "empty", delay: 5.5 },

    { position: "-bottom-[150rem] right-10", size: "w-12", type: "empty", delay: 8 },
    { position: "-bottom-[180rem] right-24", size: "w-14", type: "full", delay: 1.5 },
    { position: "-bottom-[170rem] right-10", size: "w-12", type: "empty", delay: 5.5 },
    { position: "-bottom-[160rem] right-24", size: "w-14", type: "empty", delay: 0.5 },
    { position: "-bottom-[165rem] left-10", size: "w-10", type: "full", delay: 9 },
    { position: "-bottom-[175rem] left-24", size: "w-20", type: "full", delay: 2.5 },
    { position: "-bottom-[150rem] left-10", size: "w-12", type: "empty", delay: 8 },
    { position: "-bottom-[180rem] left-24", size: "w-14", type: "full", delay: 1.5 },
    { position: "-bottom-[170rem] left-15", size: "w-12", type: "empty", delay: 5.5 },
    { position: "-bottom-[135rem] right-10", size: "w-12", type: "empty", delay: 8 },
    { position: "-bottom-[140rem] right-24", size: "w-14", type: "full", delay: 1.5 },
    { position: "-bottom-[142rem] right-10", size: "w-12", type: "empty", delay: 5.5 },
    { position: "-bottom-[190rem] right-24", size: "w-14", type: "empty", delay: 0.5 },
    { position: "-bottom-[190rem] left-5", size: "w-10", type: "full", delay: 9 },
    { position: "-bottom-[142rem] left-24", size: "w-20", type: "full", delay: 2.5 },
    { position: "-bottom-[139rem] left-5", size: "w-12", type: "empty", delay: 8 },
    { position: "-bottom-[132rem] left-24", size: "w-14", type: "full", delay: 1.5 },
    { position: "-bottom-[155rem] left-15", size: "w-12", type: "empty", delay: 5.5 },
  ];

  return (
    <>
      {hearts.map((heart, index) => (
        <HeartAnimation
          key={index}
          position={heart.position}
          size={heart.size}
          type={heart.type}
          animationDelay={heart.delay}
        />
      ))}
    </>
  );
};

export default FloatingHeartsBackground;