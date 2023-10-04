import React, { useState, useEffect } from 'react';

import JSConfetti from 'js-confetti'

import Typewriter from "typewriter-effect";
import { useSpring, animated } from 'react-spring';
import AboutHeader from './AboutHeader';


export default function TitleArea(){
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
      marginTop: 0, 
      from: { opacity: 0, marginTop: 100 },
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
            <h1 className='text-xl'>ABOUT</h1>
            <p className='text-lg'>Hey there! I'm a <animated.span style={wordAnimate} className="typing-effect">{currentWord}</animated.span></p>
            <AboutHeader />
        </div>
    )
}