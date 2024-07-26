# Sales Shelf - Bookshop Management Application

## Overview

FinalProject is a web-based application designed for managing a bookshop. It includes features for managing books, handling transactions, and generating reports. The application uses Node.js with Express for the backend, and HTML, CSS, and JavaScript for the frontend.

## Project Structure


## Features

- **Book Management**: View, add, edit, and delete book entries.
- **Transaction Management**: Handle transactions and view transaction history.
- **User Management**: User authentication and account management.
- **Reports**: Generate and view sales reports.

## Installation

### Prerequisites

- Node.js (version 14.0.0 or higher)
- MySQL or another compatible database

### Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/FinalProject.git
    cd FinalProject
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up the database:**

    - Create a `.env` file in the `server` directory and add your database configuration:

      ```
      DB_HOST=localhost
      DB_USER=root
      DB_PASSWORD=password
      DB_NAME=bookshop_db
      ```

    - Import the SQL schema to your database:

      ```bash
      mysql -u root -p < server/database.sql
      ```

4. **Run the server:**

    ```bash
    npm start
    ```

    For development with automatic restarts:

    ```bash
    npm run dev
    ```

5. **Open your browser and visit** `http://localhost:3000` to view the application.

## Usage

- **Homepage**: Access the main page of the application.
- **Library**: View and manage books in the library.
- **Transactions**: Handle and record transactions.
- **History**: View transaction history and reports.

## Contributing

Feel free to fork the repository and submit pull requests. Please ensure that your contributions align with the project's goals and maintain the code quality.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or support, please contact [your.email@example.com](mailto:your.email@example.com).



