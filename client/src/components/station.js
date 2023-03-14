import React, { useEffect, useState } from 'react';
import socket from '../services/socketIOService';
import './station.css';

const Station = (props) => {
    const [isOccupied, setIsOccupied] = useState(false);
    const [flightId, setFlightId] = useState("");

    useEffect(() => {
        socket.on("plane_enters", (data) => {
            if (props.stationId === data.station_id) {
                setIsOccupied(true);
                setFlightId(data.flight_id);
            };
        })

        socket.on("plane_leaves", (data) => {
            if (props.stationId === data) {
                setIsOccupied(false);
                setFlightId("");
            };
        })
    }, [])

    let className = "empty-station";

    if (isOccupied) {
        className = "station-occupied";
    }

    return (
        <div className={className}
            style={{ "margin-left": (props.stationId === 5 || props.stationId === 6) ? "310px" : "" }}>
            <div>{props.stationId}</div>
            {
                isOccupied ? (<div>
                    <div>
                        <img src='assets/images/plane.png' />
                    </div>
                    <div>
                        {flightId}
                    </div>
                </div>) : ("")
            }
        </div>
    );
}
export default Station;