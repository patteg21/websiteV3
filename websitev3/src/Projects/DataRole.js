import React, {useState} from "react"; 
import { Bar } from 'react-chartjs-2';
import { useSpring, animated, config } from "react-spring";

export default function DataRole(){



    const data = {
        labels: ['ML', 'Numpy', 'Python', 'SQL', 'Pandas'],
        datasets: [{
            label: 'Skills',
            data: [12, 9, 19, 14, 17],
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

    const options = {
        plugins: {
            tooltip: {
                enabled: false // Disable tooltips
            },
            legend: {
                display: false // Hide legend (optional, if you don't want to display legend)
            }
        },
        interaction: {
            mode: 'index', // 'index' mode highlights the nearest items to the cursor
            intersect: false, // Set to false to disable tooltip-interaction with items
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    
    





    return(
        <div className="DataRole">
            <h1 className="m-5 text-xl">Data</h1>
            <div className="grid grid-cols-3">
                <div className="col-span-2">
                    <Bar data={data} options={options} />
                </div>
                <div>
                    <h1>Data + Design</h1>
                    <p></p>
                </div>
                <div></div>
            </div>
        </div>
    )
}