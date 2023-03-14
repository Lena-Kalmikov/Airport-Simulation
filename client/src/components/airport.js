import socket from "../services/socketIOService";
import './airport.css';
import React, { useEffect, useState } from 'react';
import Station from './station';
import ScrollToBottom from "react-scroll-to-bottom";


const Airport = () => {

    const [landingList, setLandingList] = useState([]);
    const [takingOffList, setTakingOffList] = useState([]);
    const [planesCompletedRoute, setPlanesCompletedRoute] = useState([]);



    useEffect(() => {
        socket.on("flights", (data) => {
            setLandingList(data["landing"]);
            setTakingOffList(data["taking_off"]);
        });
        socket.on("finished", (data) => {
            setPlanesCompletedRoute(data);
        })
    }, []);

    return (
      <div className="airport">
        <div className="stations">
          <div className="row">
            <Station stationId={1} />
            <Station stationId={2} />
            <Station stationId={3} />
            <Station stationId={4} />
            <Station stationId={9} />
          </div>
          <div className="row">
            <Station stationId={5} />
            <Station stationId={8} />
          </div>
          <div className="row">
            <Station stationId={6} />
            <Station stationId={7} />
          </div>
        </div>
        <span>
          <div className="flightlist">
            <div className="container">
              <b>Incoming flights</b>
            </div>
            <ScrollToBottom className="flight-container">
              {landingList.map((flight) => {
                return (
                  <div key={flight}>
                    <p>{flight}</p>
                  </div>
                );
              })}
            </ScrollToBottom>
          </div>
          <div className="flightlist">
            <div className="container">
              <b>Outgoing flights</b>
            </div>
            <ScrollToBottom className="flight-container">
              {takingOffList.map((flight) => {
                return (
                  <div key={flight}>
                    <p>{flight}</p>
                  </div>
                );
              })}
            </ScrollToBottom>
          </div>
          <div className="flightlist">
            <div className="container">
              <b>Completed Flights</b>
            </div>
            <ScrollToBottom className="flight-container">
              {planesCompletedRoute.map((flight) => {
                return (
                  <div key={flight}>
                    <p>{flight}</p>
                  </div>
                );
              })}
            </ScrollToBottom>
          </div>
        </span>
      </div>
    );
}

export default Airport;
