import Plane from './plane.js'
import routes from './routes.js'

class Airport {
    is_last_station = false;
    station_zero = null;
    removed_planes = [];

    constructor(flights, stations, station_zero, io) {
        this.flights = flights;
        this.stations = stations;
        this.station_zero = station_zero;
        this.io = io;
    }

    on_flight_list_socket_update() {
        let incoming_planes = this.flights.filter(flight => {return flight.is_landing}).map(flight => {return flight.flight_id})
        let outgoing_planes = this.flights.filter(flight => {return !flight.is_landing}).map(flight => {return flight.flight_id})

        this.io.emit("flights", { "landing": incoming_planes, "taking_off": outgoing_planes});
    }

    add_plane_to_flight_list(plane) {
        if (!(plane instanceof Plane)) {
            return { "error": "passed parameter is not a plane" };
        };
        this.station_zero.plane_enter(plane);
        this.flights.push(plane);
        
        this.on_flight_list_socket_update();
    }

    remove_plane_from_flight_list(plane) {
        this.flights = this.flights.filter(flight => {
            return flight.flight_id !== plane.flight_id;
        });

        this.removed_planes.push(plane.flight_id);
        
        this.on_flight_list_socket_update();
        this.io.emit("finished", this.removed_planes);
    }

    move_plane_to_next_station(plane, next_station_id) {
        let free_station_ids = plane.next_station_ids.filter(station_id => {
            return !this.stations[station_id].is_occupied
        });

        if (plane.current_station_id === 0 && this.get_number_of_occupied_stations() >= 4) {
            console.log(`plane with flight id: ${plane.flight_id} cannot enter the airport at the moment`);
            return;
        }

        let result = this.stations[plane.current_station_id].plane_leave();

        if (result['error'] != null) {
            console.log(result['error']);
            return;
        }

        this.on_plane_leave_station_io_event(plane.current_station_id)

        result = this.stations[next_station_id].plane_enter(plane);

        if (result['error'] != null) {
            console.log(result['error']);
            return;
        }
        this.io.emit("plane_enters", { 'station_id': plane.current_station_id, 'flight_id': plane.flight_id });

        console.log(`plane with flight id: ${plane.flight_id} moves to station ${free_station_ids[0]}`);
    }

    is_plane_on_last_station(plane) {
        this.is_last_station = false;
        routes[plane.current_station_id]["next_station"].forEach(next_station_data => {
            if (next_station_data['is_landing'] === plane.is_landing && next_station_data['station_id'] === -1)
                this.is_last_station = true;
        })
        return this.is_last_station;
    }

    on_plane_leave_station_io_event(station_id) {
        this.io.emit("plane_leaves", station_id);
    }

    get_number_of_occupied_stations() {
        let occupied_stations = 0;
        for (const station of Object.values(this.stations)) {
            if (station.station_id !== 0 && station.is_occupied)
                occupied_stations++;
        }
        return occupied_stations;
    }

    move_planes() {
        console.log("Airport activity:");
        setInterval(() => {
            this.flights.forEach(plane => {
                console.log(`plane with flight id: ${plane.flight_id} is ${routes[plane.current_station_id]['route_name']} (station ${plane.current_station_id})`)
                if (this.is_plane_on_last_station(plane)) {
                    let result = this.stations[plane.current_station_id].plane_leave();
                    if (result['error'] != null) {
                        console.log(result['error']);
                        return;
                    } else {
                        this.remove_plane_from_flight_list(plane);
                        this.on_plane_leave_station_io_event(plane.current_station_id)
                        console.log(`plane with flight id: ${plane.flight_id} has finished their route`);
                    }
                }
                else {
                    let free_station_ids = plane.next_station_ids.filter(station_id => {
                        return !this.stations[station_id].is_occupied
                    });
                    if (free_station_ids.length > 0) {
                        this.move_plane_to_next_station(plane, free_station_ids[0]);
                        // console.log(`plane with flight id: ${plane.flight_id} moves to station ${free_station_ids[0]}`);
                    } else {
                        console.log(`plane with flight id: ${plane.flight_id} waits for his next station (${plane.next_station_ids}) to be free`);
                    }
                }
            });
            console.log("------------------------------------New Interval---------------------------------------------")
        }, 1000);
    }
}
export default Airport;