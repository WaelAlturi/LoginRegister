Project Name: React-Node Login/Register System

Description:
This project is a simple login/register system built using React.js for the client-side and Node.js for the server-side. The client-side presents a landing page with input fields for login and a button to initiate the login process. Additionally, there is a registration option that leads to a form with additional fields for first name and last name. Upon successful registration, a toast message confirms the registration.

Project Structure:

client/src: Contains the client-side code written in React.js.
pages/login.js: React component for the login page.
client/src/css: Contains CSS files for styling.
login.css: Stylesheet for the login page.
client/src/serverURL.js: File containing the server URL configuration.
server/API: Directory for API-related files.
loginApi.js: File containing API endpoints related to login.
server/models: Directory for database models.
loginModels.js: File containing models related to user authentication.

Setup Instructions:

.Clone the repository: git clone <repository_url>
.Navigate to the server directory: cd server
.Install server dependencies: npm install
.Start the server: npm start
.Navigate to the client directory: cd ../client
.Install client dependencies: npm install
.Start the client: npm start
.Access the application at http://localhost:3000 in your browser.

Technologies Used:

.React.js
.Node.js
.Express.js
.MongoDB (or any preferred database)
.React Router
.Axios (for API requests)
.Bootstrap or any preferred CSS framework for styling
