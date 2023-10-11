import React, {useState} from "react"; 
import { Bar } from 'react-chartjs-2';
import { useSpring, animated, config } from "react-spring";

export default function DataRole({setTrue, setFalse, showBar}){



    const data = {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
        datasets: [{
            label: 'Sample Bar Graph',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    };

    const scrollUp = useSpring({
        maxHeight: showBar ? '100%' : '0%',
        opacity: showBar ? 1 : 0,
        display: showBar ? 'block' : 'none',
        config: {
            duration: 1000, // Set the duration of the animation in milliseconds (e.g., 500ms)
            ...config.default, // You can use other properties from the config object if needed
          },
    });
    




    return(
        <div className="DataRole" onMouseOver={setTrue} onMouseOut={setFalse}>
            <h1 className="m-5 text-xl">Data</h1>
            {showBar ? 
            <animated.div style={scrollUp}>
                <Bar data={data} />
            </animated.div>
            : <div></div>}
        </div>
    )
}