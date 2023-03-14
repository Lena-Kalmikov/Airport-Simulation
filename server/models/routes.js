const routes = {
  0: {
    next_station: [
      { station_id: 1, is_landing: true },
      { station_id: 6, is_landing: false },
      { station_id: 7, is_landing: false },
    ],
    route_name: "waiting for control tower's instructions",
  },
  1: {
    next_station: [{ station_id: 2, is_landing: true }],
    wait_time_in_station: 1100,
    route_name: "approaching airstrip for landing 1",
  },
  2: {
    next_station: [{ station_id: 3, is_landing: true }],
    wait_time_in_station: 1200,
    route_name: "approaching airstrip for landing 2",
  },
  3: {
    next_station: [{ station_id: 4, is_landing: true }],
    wait_time_in_station: 1200,
    route_name: "approaching airstrip for landing 3",
  },
  4: {
    next_station: [
      { station_id: 5, is_landing: true },
      { station_id: 9, is_landing: false },
    ],
    wait_time_in_station: 1300,
    route_name: "at the Airstrip",
  },
  5: {
    next_station: [
      { station_id: 6, is_landing: true },
      { station_id: 7, is_landing: true },
    ],
    wait_time_in_station: 1400,
    route_name: "transporting to terminal after landing",
  },
  6: {
    next_station: [
      { station_id: -1, is_landing: true },
      { station_id: 8, is_landing: false },
    ],
    wait_time_in_station: 1400,
    route_name: "at the Terminal",
  },
  7: {
    next_station: [
      { station_id: -1, is_landing: true },
      { station_id: 8, is_landing: false },
    ],
    wait_time_in_station: 1200,
    route_name: "at the Terminal",
  },
  8: {
    next_station: [{ station_id: 4, is_landing: false }],
    wait_time_in_station: 1300,
    route_name: "transporting from terminal to airstrip",
  },
  9: {
    next_station: [{ station_id: -1, is_landing: false }],
    wait_time_in_station: 1100,
    route_name: "taking off",
  },
};
export default routes;
