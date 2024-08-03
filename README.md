# Event Booking System

## Overview

This project is a basic event booking system that allows users to view events, book tickets, and print tickets. The system consists of a frontend built with HTML, CSS, and JavaScript, and a backend using Node.js, TypeScript, Express.js, and MongoDB.

## Table of Contents

- [Setup](#setup)
- [Frontend Details](#frontend-details)
- [Backend Details](#backend-details)
- [API Endpoints](#api-endpoints)
- [Booking Rules](#booking-rules)
- [Running the Project](#running-the-project)
- [Evaluation Criteria](#evaluation-criteria)

## Setup

1. **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/event-booking-system](https://github.com/YUVARAJANP/EventBookingSystem).git
    cd event-booking-system
    ```

2. **Install dependencies for both frontend and backend:**
    ```bash
    npm install
    ```

3. **Configure MongoDB:**
    - Ensure MongoDB is installed and running on your machine.
    - Update the MongoDB connection string in the backend configuration file.

4. **Start the backend server:**
    ```bash
    npm run dev
    ```

5. **Open `index.html` in your browser to access the frontend.**

## Frontend Details

The frontend is implemented with HTML, CSS, and JavaScript. It provides the following features:

- **View Events:** Displays a list of events with their details (name, date, total tickets).
- **Book Tickets:** Allows users to book tickets for a selected event.
- **Print Tickets:** Generates a printable format of the ticket.

### Key Files

- `index.html`: Main HTML file containing the structure of the page.
- `style.css`: CSS file for styling the webpage.
- `script.js`: JavaScript file containing the logic for rendering events, booking tickets, and printing tickets.

### Functions

- `renderEvents()`: Renders the list of events on the webpage.
- `submitBooking()`: Handles the submission of the booking form.
- `printTicket()`: Generates a printable ticket.

## Backend Details

The backend is implemented using Node.js, TypeScript, Express.js, and MongoDB. It provides REST APIs for managing events and bookings.

### Key Files

- `server.ts`: Main server file containing the Express server setup.
- `routes/eventRoutes.ts`: Contains routes for event-related endpoints.
- `routes/bookingRoutes.ts`: Contains routes for booking-related endpoints.
- `models/eventModel.ts`: Mongoose schema and model for events.
- `models/bookingModel.ts`: Mongoose schema and model for bookings.

## API Endpoints

### Events

- `POST /events`: Create a new event.
    - Request body: `{ "name": "Concert A", "date": "2024-08-10", "totalTickets": 100 }`
- `GET /events`: Retrieve a list of all events.
- `GET /events/:id`: Retrieve details of a specific event.

### Bookings

- `POST /bookings`: Book tickets for an event.
    - Request body: `{ "userId": "user123", "eventId": 1, "quantity": 2 }`
- `DELETE /bookings/:id`: Cancel a booking by its ID.
- `POST /print-ticket`: Print a ticket for a specific booking.

## Booking Rules

- **Maximum Tickets per Booking:** Each user can book a maximum of 15 tickets per booking request.
- **Availability Check:** The system checks if enough tickets are available before confirming a booking. If not, the booking request is rejected.

## Running the Project

1. **Ensure MongoDB is running:**
    ```bash
    mongod
    ```

2. **Start the backend server:**
    ```bash
    npm run dev
    ```

3. **Open `index.html` in your browser to access the frontend.**

## Evaluation Criteria

1. **Code Quality and Structure:**
    - Well-organized and easy-to-read code with descriptive variable names and a clear structure.

2. **Implementation of Required Functionality:**
    - Accurate creation of events, booking of tickets, and cancellation of bookings.

3. **Error Handling and Robustness:**
    - Graceful handling of unexpected situations with helpful error messages and continued system operation.

4. **Documentation:**
    - Clear instructions on how to set up and use the API.

## Conclusion

This project provides a basic but functional event booking system. It demonstrates a clear separation of frontend and backend responsibilities, effective use of modern web technologies, and adherence to essential principles of web development.
