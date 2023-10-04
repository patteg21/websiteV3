import React, { useState, useEffect } from 'react';

import JSConfetti from 'js-confetti'

import Typewriter from "typewriter-effect";
import { useSpring, animated } from 'react-spring';


export default function DesiredTitle(){
    const words = [
        "Frontend Developer",
        "Backend Developer",
        "Designer",
        "ML Enthusiast",
        "Sith Lord",
    ]
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState(words[currentWordIndex]);

    const wordAnimate = useSpring({
      opacity: 1,
      transform: 'translateY(0%)', 
      from: {opacity:0, transform: 'translateY(-30%)'  },
      reset: true,
    })

    useEffect(() => {
        const interval = setInterval(() => {
            const element = document.getElementsByClassName("About") 
            element[0].style.background = 'radial-gradient(circle, black, rgb(142, 5, 194,0.2)'
            
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setCurrentWord(words[currentWordIndex]);

          if (currentWordIndex === 4){
            element[0].style.background = "radial-gradient(circle, black, rgb(138, 3, 3,0.5))"
          }

        }, 2000); // Change word every 2 seconds
    
        return () => clearInterval(interval);
      }, [currentWordIndex]);
    return(
        <div className="DesiredRole">
            <animated.h1 style={wordAnimate} className="typing-effect">{currentWord}</animated.h1>
        </div>
    )
}