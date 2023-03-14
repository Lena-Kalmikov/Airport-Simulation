## Airport-Simulation
 
The goal of this project was to create an App that manages plane traffic in an airport, routing planes to different stations, managing variable loads and preventing deadlocks. 

* Back-end: NodeJS, using Express and Socket.IO.
* Front-end: ReactJS

Application:
You can see three lists in the App:
* Incoming Flights: includes all flights that are waiting to land or are in the process of landing in the airport. 
* Outgoing Flights: includes all flights that are waiting to take off or are in the process of taking off in the airport.
* Completed Flights: flights that exited the airport after successfully landing or taking off.

There were a few constraints in the Characterization document:
* Incoming flights have to take the following routes: station 1 > station 2 > station 3 > station 4 > station 5 > station 6 or station 7 (if 6 is occupied).
* Outgoing flights have to take the following routes: station 6 or station 7 (if 6 is occupied) > station 8 > station 4 > station 9
* The goal if the app was to manage incoming and outgoing flights in the airport in the most efficient way – which means preventinf deadlocks and situations where planes can't move to their next station because it's occupied. 


 <img src="https://github.com/Lena-Kalmikov/Airport-Simulation/blob/main/schema.PNG" width="400" height="280"/>


 <img src="https://github.com/Lena-Kalmikov/Airport-Simulation/blob/main/airport_activity.gif" width="700" height="580"/>

You can follow one plane taking off here:

 <img src="https://github.com/Lena-Kalmikov/Airport-Simulation/blob/main/takeoff1.gif" width="700" height="580"/>

And here you can follow after plane landing:

 <img src="https://github.com/Lena-Kalmikov/Airport-Simulation/blob/main/landing1.gif" width="700" height="580"/>
 
If you decide to download and run the project locally, do the following:
*	Open two terminals in vs code.
*	In one terminal do the following:
    * Change directory to the 'server' folder
    * Run 'npm i' to install all necessary modules
    * Run 'node index.js' to start node
*	In the other do the following:
    * Change directory to the 'client' folder
    * Run 'npm i' to install all necessary modules
    * Run 'npm start' to start the react app
*	Refresh the website and you're ready to go.

