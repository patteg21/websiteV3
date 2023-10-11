import React, { useState, useEffect, useRef } from "react";
// https://www.npmjs.com/package/js-confetti
import JSConfetti from 'js-confetti'
// https://www.npmjs.com/package/dotted-map?activeTab=readme
import { useSpring, animated } from 'react-spring';

export default function HomeButton({setSnackBarShow, snackBarShow}){
    const copyEmail = useRef(null)

    function snackBarPopUp(){
        console.log(snackBarShow)
        setSnackBarShow(true)
        setTimeout(()=>{
            setSnackBarShow(false)
        },1500)
    }

    function handleConnectClick(event){
        navigator.clipboard.writeText(copyEmail.current.value)

        const button = event.currentTarget
        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
        circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
        circle.classList.add("ripple"); 

        button.appendChild(circle);

        

        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti({
            confettiRadius: 3,
            confettiNumber: 500,
            confettiColors: [
                'rgb(142, 5, 194)', 'rgb(142, 5, 194)', '#DDA0DD', '#8F00FF', '#DA70D6', '#BA55D3',
              ],
        })

        snackBarPopUp()
    }

    return(
    <div className="Get-Connected">
        <div className="Container-Home">
            <input
                ref={copyEmail}
                type="hidden"
                value="patteg7@gmail.com" 
            />
            <button 
            onClick={handleConnectClick} 
            className="connect-button">
            Connect
            </button>
        </div>
    </div>
    )
}