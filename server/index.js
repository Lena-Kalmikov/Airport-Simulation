import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import express from "express";
import Plane from "./models/plane.js";
import Station from "./models/station.js";
import Airport from "./models/airport.js";

const app = express();
app.use(cors());

const server = createServer(app);

const io = new Server(server, {
  perMessageDeflate: false,
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  // emit information to client here
});

server.listen(3001, () => {
  console.log("Server Running");
});

const flights = [];

const station_zero = new Station(0);
const station_one = new Station(1);
const station_two = new Station(2);
const station_three = new Station(3);
const station_four = new Station(4);
const station_five = new Station(5);
const station_six = new Station(6);
const station_seven = new Station(7);
const station_eight = new Station(8);
const station_nine = new Station(9);

const stations = {
  0: station_zero,
  1: station_one,
  2: station_two,
  3: station_three,
  4: station_four,
  5: station_five,
  6: station_six,
  7: station_seven,
  8: station_eight,
  9: station_nine,
};

const airport = new Airport(flights, stations, station_zero, io);
airport.move_planes();

let flight_id_tracker = 0;

// use this to create potentially infinite amount of planes
// at different times to better simulate a true airport activity:
setInterval(() => {
  let rand = Math.random() * 3000;

  setTimeout(function () {
    flight_id_tracker += 1;
    let is_landing = Math.random() < 0.55;
    let name = is_landing ? "LND-" : "TKOF-";
    let flight_id = name + flight_id_tracker;
    const plane = new Plane(flight_id, is_landing);
    airport.add_plane_to_flight_list(plane);
  }, rand);
}, 1500);

// // use this while loop instead, to create limited number of planes:
// const PLANES_TO_CREATE = 1;
// let created_planes = 0;

// while (created_planes < PLANES_TO_CREATE) {
//   setTimeout(function () {
//     flight_id_tracker += 1;
//     let is_landing = Math.random() < 0.55;
//     let name = is_landing ? "LND-" : "TKOF-";
//     let flight_id = name + flight_id_tracker;
//     const plane = new Plane(flight_id, is_landing);
//     airport.add_plane_to_flight_list(plane);
//   }, 800);
//   created_planes += 1;
// }
