# Library Book Management System

## Overview
This project is a Library Book Management System developed using Spring Boot for the backend, Vite with React for the frontend, PostgreSQL for the database, and the Context API for state management. It provides a RESTful API for managing books in a library, including features such as adding, retrieving, updating, and deleting books.📚✨


## Table of Contents
- Features
- Technologies Used
- Getting Started
- Backend API Endpoints
- Frontend Setup

## Features
- Add new books to the library
- Retrieve a list of all books
- Retrieve details of a specific book
- Update information of an existing book
- Delete a book from the library
- Retrieve issued books by user
- Show student's history

## Technologies Used
### Backend
- Java
- Spring Boot
- Spring Data JPA
- PostgreSQL (for production, replace H2 Database)
- Maven (for dependency management)

### Frontend
- Vite
- React
- Context API (for state management)
- Redux
- Tailwind CSS

## Getting Started
### Backend
1. Clone the repository: `git clone https://github.com/Akshay-vaghasiya/Library-Book-Management-System`
2. Navigate to the project directory: `cd Library-Book-Management-System`
3. Navigate to the `backend` directory: `cd Backend`
4. Run the backend application: `mvn spring-boot:run`

### Frontend
1. Navigate to the `frontend` directory: `cd Frontend`
2. Install dependencies: `npm install`
3. Start the frontend development server: `npm run dev`
4. Access the frontend at `http://localhost:5173`

## Frontend Setup
The frontend is built using Vite with React for the UI and the Context API for state management.

### Folder Structure
- `src/`
  - `components/`: React components
  - `context/`: Context API providers and consumers
  - `styles/`: Stylesheets (Tailwind CSS)
  - `views/`: React views/pages
  - `App.js`: Main React component
  - `index.js`: Entry point of the React application

### Styling with Tailwind CSS
Tailwind CSS classes are used for styling components. To apply styles, refer to the official Tailwind CSS documentation: [Tailwind CSS Documentation](https://tailwindcss.com/docs)
