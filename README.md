## Airport-Simulation
 
The goal of this project was to create an App that manages plane traffic in an airport, routing planes to different stations, managing variable loads and preventing deadlocks. 

* Back-end: NodeJS, using Express and Socket.IO.
* Front-end: ReactJS

Application:
1. You can see three lists in the app: Incoming flights, outgoing flights and compltesed flights.


 <img src="https://github.com/Lena-Kalmikov/Airport-Simulation/blob/main/schema.PNG"/>


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

