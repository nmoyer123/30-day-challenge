# 30-Day Challenge Tracker

The 30-Day Challenge Tracker is a web application that allows users to track their progress over a 30-day challenge. Users can log their daily activities and see their progress over time. This application is built using Node.js, Express, Sequelize, Handlebars, and PostgreSQL.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Links](#links)

## Installation

To get a local copy up and running, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/nmoyer123/30-day-challenge.git
    cd 30-day-challenge-tracker
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up the database:**
    - Ensure you have PostgreSQL installed and running.
    - Create a `.env` file in the root directory and add your database configuration:
        ```
        DB_NAME=challenge_db
        DB_USER=your_username
        DB_PASSWORD=your_password
        DB_URL=your_database_url (optional, if using a complete URL)
        ```

4. **Run database migrations and seed data:**
    ```bash
    npm run seed
    ```

5. **Start the server:**
    ```bash
    npm start
    ```

6. **Open your browser and navigate to:**
    ```
    http://localhost:3001
    ```

## Usage

- **Login/Register:** Users can register a new account or login with existing credentials.
- **Profile:** After logging in, users can access their profile to see a calendar of the 30 days.
- **Track Progress:** Click on a day to log activities such as running, water intake, reading, alcohol consumption, workout, and sleep.
- **Save Data:** Data for each day is saved and can be revisited by clicking on the respective day.
![DAYHome](https://github.com/nmoyer123/30-day-challenge/assets/161282417/07657479-9820-447c-b7c1-7582c6473571)
![Screenshot 2024-06-17 163641](https://github.com/nmoyer123/30-day-challenge/assets/161282417/78e016b7-ec39-4468-92da-752dc08f8533)
![Screenshot 2024-06-17 172938](https://github.com/nmoyer123/30-day-challenge/assets/161282417/d21e5787-5b64-4257-b734-a7d4539b4855)




## Features

- **User Authentication:** Secure login and registration using bcrypt for password hashing.
- **Daily Logging:** Users can log specific activities for each day.
- **Data Persistence:** Data is stored in a PostgreSQL database, ensuring persistence across sessions.
- **Responsive Design:** The application is designed to be responsive and user-friendly.


## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to create an issue or submit a pull request. Please ensure your changes follow the project's coding standards and conventions.

## Links
- **Render site** https://three0-day-challenge-l4lc.onrender.com
- **GitHub** https://github.com/nmoyer123/30-day-challenge

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

