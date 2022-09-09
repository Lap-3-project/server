# server

## Pathing quick lookup

### all routes are built off of https://universallychallenged.herokuapp.com/

#### GET Routes

* /users/ will return all users and their highscores
* /users/:username will return the specific username and their highscores
* /users/:username/scores will return just the scores of the user

#### POST Routes (Sending JSON)

* /users/ (Requires: username) will create a new user with that username
* /users/:username/scores (Requires: username, category, score) will update that users score assuming it is higher than their stored score for that category


## Installation & Usage

### Installation

* Open a terminal and navigate to the server folder.
* In the terminal enter "npm install" to install the needed dependencies.

### Usage

* Open a terminal and navigate to the server folder.
* In the terminal enter "npm run dev" to start the server.
* Use the above routes to access the information for the paired database.