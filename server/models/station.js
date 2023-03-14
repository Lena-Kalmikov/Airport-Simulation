import routes from './routes.js'
import Plane from './plane.js';

class Station {
    station_id = 0;
    previous_station_id = 0;
    next_station_id = 0;
    current_flight_id = "";
    current_plane_id = "";
    is_occupied = false;
    plane_enter_time = null;

    constructor(station_id) {
        this.station_id = station_id;
        this.route_data = routes[this.station_id];
    }

    plane_enter(plane) {
        if (!(plane instanceof Plane)) {
            return { "error": "passed parameter is not a plane" };
        };

        if (this.station_id === 0) {
            plane.set_current_station(this.station_id);
            return { 'error': null };
        };

        if (this.current_flight_id !== "") {
            return { 'error': "station is occupied" };
        };

        plane.set_current_station(this.station_id);
        this.plane_enter_time = Date.now();
        this.current_flight_id = plane.flight_id;
        this.is_occupied = true;
        return { "error": null };
    }

    plane_leave() {
        if (this.current_flight_id == "" && this.station_id !== 0) {
            return { 'error': "station is already empty, no plane here" }
        };

        let now = Date.now();
        let seonds_since_entered_station = now - this.plane_enter_time;

        if (seonds_since_entered_station < this.route_data['wait_time_in_station'] && this.station_id !== 0) {
            return { 'error': `Wait time didn't pass yet, milli seconds in station: ${seonds_since_entered_station}` }
        }

        console.log(`seconds passed: ${seonds_since_entered_station}, seconds needed: ${this.route_data['wait_time_in_station']}`)

        this.is_occupied = false;
        this.current_flight_id = "";
        return { "error": null };
    }
}
export default Station;