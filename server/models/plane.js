import routes from './routes.js'

class Plane {
    plane_id = "";
    flight_id = "";
    current_station_id = 0;
    next_station_ids = [];
    is_finished_route = false
    is_landing = false;
    station_enter_time = null

    constructor(flight_id, is_landing) {
        this.flight_id = flight_id;
        this.is_landing = is_landing;
    }

    set_plane_id(id) {
        this.plane_id = id;
    }

    set_current_station(station) {
        this.current_station_id = station;
        this.station_enter_time = Date.now()
        this.next_station_ids = [];
        routes[this.current_station_id]["next_station"].forEach(next_station_data => {
            if (next_station_data['is_landing'] === this.is_landing && next_station_data['station_id'] !== -1) {
                this.next_station_ids.push(next_station_data['station_id'])
            }
        })
        this.is_finished_route = this.next_station_ids === [];
    }

    get_current_station() {
        return this.current_station_id;
    }
}
export default Plane;