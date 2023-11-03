# node-visitor-check

A simple Express.js application to determine whether a user has visited the website before using cookies and `localStorage`.

## Prerequisites

- Node.js
- npm (comes with Node.js)

## Installation

1. Clone this repository:
```bash
git clone https://github.com/baditaflorin/node-visitor-check/
```

2. Navigate to the repository folder and install dependencies:
```bash
cd node-visitor-check/
npm install
```

3. Run the server:
```bash
npm start
```

Open your browser and navigate to http://localhost:3030.

## Features
Uses cookies to track visitors.
Also employs localStorage as a fallback to cookies.
Responds with "New Visitor" if the user hasn't visited before.
Responds with "Already Visited" if the user has visited before.

## License
This software is copyrighted by Florin Badita.
