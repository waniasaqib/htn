import { useEffect, useRef, useState } from "react";
import { TypewriterTextProps } from "../types/props";
  
  const TypewriterText = ({
    text,
    color = "text-black",
    fontSize = "text-8xl",
    delay = false
  }: TypewriterTextProps) => {
    const [currentText, setCurrentText] = useState<string>('');
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(!delay);
    const textRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      if (delay) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.disconnect();
            }
          },
          { threshold: 0.5 }
        );
  
        if (textRef.current) {
          observer.observe(textRef.current);
        }
  
        return () => observer.disconnect();
      }
    }, [delay]);
  
    useEffect(() => {
      if (!isVisible) return;
  
      setIsTyping(true);
      let index = 0;
      const targetText = text;
      const speed = 100;
  
      const typingInterval = setInterval(() => {
        if (index < targetText.length) {
          setCurrentText(prev => prev + targetText.charAt(index));
          index++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, speed);
  
      return () => clearInterval(typingInterval);
    }, [text, isVisible]);
  
    return (
      <div ref={textRef}>
        <h1 className={`${color} ${fontSize} mb-0`}>
          {currentText}
          {isTyping && <span className="cursor-blink">|</span>}
        </h1>
      </div>
    );
  };

export default TypewriterText;