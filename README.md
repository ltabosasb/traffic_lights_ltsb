# traffic_lights_ltsb

Traffic Simulation Project
This project simulates the movement of cars on a city road over time, taking into account traffic lights and their changing states. It's built with JavaScript and runs on Node.js.

Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Before you begin, ensure you have Node.js installed on your machine. This project was developed with Node.js version 14.x, but it should be compatible with newer versions as well.

Cloning the Repository
To get started with the Traffic Simulation project on your local machine, first, clone the repository:

    git clone https://github.com/ltabosasb/traffic-simulation.git
cd traffic-simulation
If you prefer to fork the repository before cloning, click the "Fork" button on the repository's page on GitHub. This will create a copy of the repository in your own GitHub account. After forking, you can clone the repository using the URL of your fork, replacing ltabosasb with your GitHub username.

Installing Dependencies
This project does not rely on external dependencies other than jest for unit testing. To install jest, navigate to your project directory and run:



    npm install
This will install all necessary dependencies, as listed in the package.json file, into the node_modules folder.

Running the Simulation
To run the traffic simulation, use the following command:

    node index.js
Replace index.js with the path to the script that includes your simulation code if it's different.

Running Tests
This project uses Jest for unit testing. To run the tests, execute:

    npm test
This command will find and run all test files in the project.