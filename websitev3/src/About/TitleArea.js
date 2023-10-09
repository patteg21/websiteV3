import React, { useState, useEffect } from 'react';

import JSConfetti from 'js-confetti'

import Typewriter from "typewriter-effect";
import { useSpring, animated } from 'react-spring';
import AboutHeader from './AboutHeader';


export default function TitleArea(){

    return(
        <div className="DesiredRole text-center">
            <AboutHeader />
        </div>
    )
}