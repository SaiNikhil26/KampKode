### KampKode Contact Form Application

This is a Node.js Express Applications that allows users to fill out a contact form and submit the data to Firebase Firestore.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Running The Application](#running-the-appication)
- [Built With](#built-with)

## Installation

1. **Clone the repository**:

```bash
    git clone https://github.com/SaiNikhil26/KampKode
    cd KampKode
```

2. **Install the dependencies**:

```bash
npm install
```

## Configuration

1. **Create a Firebase project** at `https://firebase.google.com/`

2. Create a Firestore database in your Firebase Project.

3. Generate a service account key:
   - Go to **Project Settings > Service Accounts.**
   - Click **Generate New Private Key**, then download the JSON file.
   - Move the JSON file to the root directory of the project.

## Running the Application

1. **Start the server**:

- Run the following command to start the server:

```bash
npm start
```

2. **Access the application**:

- Open your browser and navigate to `http://localhost:3000` to access the application.

## Built With

- [Node](https://nodejs.org/en) - JavaScript Runtime
- [Express](https://expressjs.com/) - Node.js web application framework
- [Firebase](https://firebase.google.com/) - Backend platform

This `README.md` provides clear instructions on setting up, running, and deploying the application.

Access the deployed application at `https://kampkode.onrender.com`
