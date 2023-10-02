import React, { useState, useEffect } from "react";

//https://www.npmjs.com/package/dotted-map
import DottedMap from 'dotted-map';

export default function Map(){
    const[mapLoading, setMapLoading] = useState(true)
    const[createMap, setCreateMap] = useState(null)


    
    useEffect(()=>{

        let color ="rgb(142, 5, 194)"

        const map = new DottedMap({ height: 75, grid: 'diagonal' });

        //London
        map.addPin({
            lat: 51.5072,
            lng: 0.1276,
            svgOptions: { color: color, radius: 0.4 },
        });
        // New York
        map.addPin({
            lat: 40.73061,
            lng: -73.935242,
            svgOptions: { color: color, radius: 0.4 },
        });
        //Charlotte
        map.addPin({
            lat: 35.2271,
            lng: -80.8431,
            svgOptions: { color: color, radius: 0.4 },
        });
        // Seattle
        map.addPin({
            lat: 47.6061,
            lng: -122.3328,
            svgOptions: { color: color, radius: 0.4 },
        });
    
        const svgMap = map.getSVG({
            radius: 0.30,
            color: '#9B938B',
            shape: 'circle',
            backgroundColor: 'transparent',
        });
        setCreateMap(svgMap)
        setMapLoading(false)
    }, [])


    return(
        <div className="Map">
            <div className="WorldMap">
            { mapLoading ? <h1 className="text-center">Loading...</h1> : <img src={`data:image/svg+xml;utf8,${encodeURIComponent(createMap)}`} />}
            </div>
        </div>
    )
}
