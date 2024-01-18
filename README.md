## Airport-Simulation
 
The goal of this project was to create an App that manages plane traffic in an airport, routing arriving and departing planes to different stations, managing variable loads and preventing deadlocks. 

* Back-end: NodeJS, using Express and Socket.IO.
* Front-end: ReactJS.

You can see three lists in the App:
* Incoming Flights: includes all flights that are waiting to land or are in the process of landing in the airport. 
* Outgoing Flights: includes all flights that are waiting to take off or are in the process of taking off in the airport.
* Completed Flights: flights that exited the airport after successfully landing or taking off.

There were a few constraints for this project:
* The goal of the app was to manage arriving and departing flights in the airport in the most efficient way – which means preventing deadlocks and situations where planes can't move to their next station because it's occupied. 
* Incoming flights have to take the following routes only: station 1 > station 2 > station 3 > station 4 > station 5 > station 6 or station 7 (if 6 is occupied).
* Outgoing flights have to take the following routes only: station 6 or station 7 (if 6 is occupied) > station 8 > station 4 > station 9

Routes can be seen in the image below:

 <img src="https://github.com/Lena-Kalmikov/Airport-Simulation/blob/main/schema.PNG" width="400" height="280"/>
 
 Airport App:

 <img src="https://github.com/Lena-Kalmikov/Airport-Simulation/blob/main/airport_activity.gif" width="700" height="580"/>

Departing plane completing it's route:

 <img src="https://github.com/Lena-Kalmikov/Airport-Simulation/blob/main/takeoff1.gif" width="700" height="580"/>

Arriving plane completing it's route:

 <img src="https://github.com/Lena-Kalmikov/Airport-Simulation/blob/main/landing1.gif" width="700" height="580"/>
 
