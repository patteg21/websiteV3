import React, { useState } from "react";
// https://www.npmjs.com/package/dotted-map?activeTab=readme
import DottedMap from 'dotted-map';
import "./home.css"


export default function Home(){

    const map = new DottedMap({ height: 60, grid: 'diagonal' });




    return(
        <div className="Home">
            <div className="image-container">
                    <div className="under-image">Data</div>
                    <div className="over-image">Data</div>
            </div>
        </div>
    )}