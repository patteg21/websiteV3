import React, { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

export default function RadarChart(){
    const [chartData, setChartData] = useState(null)
    const [chartOptions, setChartOptions] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

            const data = {
                labels: ['Python', 'Pandas', 'TensorFlow', 'Analysis', 'Visualization'],
                datasets: [
                {
                    label: 'Skills',
                    data: [10, 7, 6, 8, 4], // Replace these values with your data points
                    backgroundColor: 'rgb(119, 166, 247,0.2)', // Background color of the area
                    borderColor: 'rgb(119, 166, 247,1)', // Border color of the lines
                    borderWidth: 2, // Width of the lines
                },
                ],
            };
          
          const options = {
              scale: {
                angleLines: {
                  display: true,
                },
                ticks: {
                  suggestedMin: 0,
                  suggestedMax: 10,
                },
              },
            };
        
        setChartData(data)
        setChartOptions(options)
        setLoading(false)


    }, [])
        

    return(
        <div className="RadarChart">
            {loading ? null : <Radar data={chartData} options={chartOptions} />}
        </div>
    )
}