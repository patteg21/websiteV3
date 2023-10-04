import React, { useState, useEffect } from 'react';

import JSConfetti from 'js-confetti'

import { useSpring, animated } from 'react-spring';


export default function DesiredTitle(){
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    
    const words = [
        "Frontend Dev",
        "Backend Dev",
        "FullStack Dev",
        "Shadow Ninja",
        "Machine Learning Enthusiast",
        "Sith Lord",
    ]
    
    const [currentWord, setCurrentWord] = useState(words[currentWordIndex]);


    useEffect(() => {
        const interval = setInterval(() => {
            const element = document.getElementsByClassName("About") 
            element[0].style.background = 'radial-gradient(circle, black, rgb(142, 5, 194,0.2)'
            
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setCurrentWord(words[currentWordIndex]);

          if (currentWordIndex === 5){

            element[0].style.background = "radial-gradient(circle, black, red)"
          }

        }, 2000); // Change word every 2 seconds
    
        return () => clearInterval(interval);
      }, [currentWordIndex]);
    return(
        <div className="DesiredRole">
            <h1 className="typing-effect">{currentWord}</h1>
        </div>
    )
}