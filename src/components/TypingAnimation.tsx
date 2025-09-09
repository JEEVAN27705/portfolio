import { useState, useEffect } from "react";

interface TypingAnimationProps {
  texts: string[];
  className?: string;
}

export default function TypingAnimation({ texts, className = "" }: TypingAnimationProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && currentText === fullText) {
        typeSpeed = 2000; // Pause at end
        setIsDeleting(true);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        typeSpeed = 500; // Pause before starting new text
      }

      return () => clearTimeout(timeout);
    }, isDeleting ? 50 : currentText === texts[currentIndex] ? 2000 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse text-accent">|</span>
    </span>
  );
}