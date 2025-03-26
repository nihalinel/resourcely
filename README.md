<div align="center">

<h3 align="center">Resourcely</h3>

  <p align="center">
    A platform to help newcomers to Canada easily find essential services.
    <br />
     <a href="https://github.com/nihalinel/resourcely">github.com/nihalinel/resourcely</a>
  </p>
</div>

## Table of Contents

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#key-features">Key Features</a></li>
      </ul>
    </li>
    <li><a href="#architecture">Architecture</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

Resourcely is a React-based web application designed to assist newcomers to Canada in finding essential services. It provides a centralized platform to discover resources such as food banks, job centers, and local events, with a focus on being ESL-friendly and easy to use. The current implementation features a waitlist sign-up page.

### Key Features

- **Waitlist Sign-up:** Allows users to submit their email to join a waitlist for the platform.
- **Firebase Integration:** Uses Firebase Firestore to store submitted email addresses.
- **Responsive Design:**  The application layout adapts to different screen sizes.
- **Modern UI:** Styled with SCSS, providing a clean and user-friendly interface.

## Architecture

![Architecture Diagram](https://github.com/user-attachments/assets/75adc7aa-7719-4c4f-a9bb-3ba847e12e9f)

The project is built using:

- **Frontend:** React
- **Styling:** SCSS
- **Database:** Firebase Firestore
- **Routing:** React Router
- **Package Manager:** npm

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- Node.js and npm installed on your machine. You can download Node.js from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/nihalinel/resourcely.git
   ```
2. Navigate to the project directory:
   ```sh
   cd resourcely
   ```
3. Install the npm packages:
   ```sh
   npm install
   ```
4. Configure Firebase:
   - Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
   - Enable Firestore Database.
   - Obtain your Firebase configuration details (apiKey, authDomain, projectId, etc.).
   - Create a `.env` file in the root of your project and add your Firebase configuration as environment variables:
     ```
     REACT_APP_FIREBASE_API_KEY=YOUR_API_KEY
     REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
     REACT_APP_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
     REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
     REACT_APP_FIREBASE_APP_ID=YOUR_APP_ID
     REACT_APP_FIREBASE_MEASUREMENT_ID=YOUR_MEASUREMENT_ID
     ```
5. Start the development server:
   ```sh
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Acknowledgments

- This README was created using [gitreadme.dev](https://gitreadme.dev) — an AI tool that looks at your entire codebase to instantly generate high-quality
