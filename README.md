# 30-Day-Challenge

Welcome to the 30 Day Challenge website repository! This project is designed to help users commit to and track their progress through a 30-day personal improvement challenge, similar to the 75 Hard challenge.

Table of Contents
Features
Installation
Usage
Project Structure
Contributing
License
Features
User Authentication: Secure sign-up and login system.
Dashboard: Personalized user dashboard to track daily progress.
Daily Check-ins: Users can log their daily activities and see their streaks.
Progress Tracking: Visual representation of progress over the 30-day period.
Responsive Design: Mobile-friendly interface for easy access on all devices.
Installation
To get started with the project, follow these steps:

Clone the repository:

git clone https://github.com/yourusername/30-day-challenge.git
cd 30-day-challenge

Install dependencies:
npm install

Configure environment variables:
Create a .env file in the root directory.
Add your configuration variables as shown in the .env.example file.


Run the application:
npm start
Usage
Register for an account.
Log in to your dashboard.
Start a new challenge and commit to daily tasks.
Log your progress every day.
Track your progress on your personalized dashboard.
Project Structure


30-Day-Challenge/
├── config/
│   └── connections.js
├── controllers/
│   ├── api/
│   │   ├── dayRoutes.js
│   │   ├── index.js
│   │   ├──userRoutes.js
|   └── userRoutes.js
│   └── index.js
|
├──db/
|   ├── schema.sql
├── models/
│   ├── day.js
│   ├── index.js
│   ├── User.js
│   
├── public/
│   ├── css/
|   |   ├── style.css
│   └── js/
|       ├── Daybars.js
|       ├── login.js
|       ├── logout.js
|       ├── profile.js
├── seeds/
|   ├── projectData.json
|   ├── seeds.js
|   ├── userData.json
|
├── utils/
|   ├── auth.js
|   ├── helpers.js
|
├── views/
│   ├── layouts/
│   │   └── main.handlebars
│   ├── partials/
│   ├── day.handlebars
│   ├── homepage.handlebars
│   ├── login.handlebars
│   └── profile.handlebars
├── .env
├── .gitignore
├── server.js
└── package.json

Contributing
We welcome contributions to enhance the functionality and usability of this project. To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bugfix
3. Commit your changes
4. Push to the branch
5. Create a Pull Request describing your changes.





