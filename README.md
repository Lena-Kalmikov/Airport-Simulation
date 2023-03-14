## Airport-Simulation
 
The goal of this project was to create an App that manages plane traffic in an airport, routing planes to different stations, managing variable loads and preventing deadlocks. 

* Back-end: NodeJS, using Express and mainly Socket.IO.
* Front-end: JavaScript using ReactJS, HTML, CSS.

Application:
1.	New users can register, providing username and password that will be saved in the system.
2.	Existing users can login with correct username and password that will be cross checked with the user details in the system.
3.	Once the users are logged in, they will see two lists: online users to chat with, and offline users.
4.	The user can pick someone to chat with from the online list, and send them an invite. 
5.	If the other person accepts, both users will enter a private chat room.
6.	If the other person refuses to join the room, the inviting user will get an alert about it.
7.	In the chat room, there can only be two people. They can chat with one another and play tic-tac-toe.
8.	Once one of the users leaves the room, both of the users are redirected back to the user lists page. 

 <img src="https://github.com/Lena-Kalmikov/Airport-Simulation/blob/main/airport_activity.gif" width="700" height="580"/>

You can follow one plane taking off here:

 <img src="https://github.com/Lena-Kalmikov/Airport-Simulation/blob/main/takeoff1.gif" width="700" height="580"/>

And here you can follow after plane landing:

 <img src="https://github.com/Lena-Kalmikov/Airport-Simulation/blob/main/landing1.gif" width="700" height="580"/>
 
If you decide to download and run the project locally, do the following:
1.	Open two terminals in vs code.
2.	In one of them do the following:
 * Change directory to the 'server' folder
   * Run 'npm i' to install all necessary modules
   * Run 'node index.js' to start node
3.	In the other do the following:
   * Change directory to the 'client' folder
   * Run 'npm i' to install all necessary modules
   * Run 'npm start' to start the react app
4.	Refresh the website and you're ready to go.

