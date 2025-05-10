# Vaccination Management System

A full-stack web application for managing and tracking school vaccination drives. The system allows school coordinators to manage student records, schedule vaccination drives, track vaccination statuses, and generate reports.

## Features

1. **Authentication & Access Control** (Simulated)
   - Login to access the system as a school coordinator (admin role).
   - Redirect to a personalized dashboard.

2. **Dashboard Overview**
   - Displays key metrics, such as total students, vaccinated percentage, and upcoming vaccination drives.

3. **Student Management**
   - Add/edit individual student details.
   - Bulk import students via CSV upload.
   - Track vaccination status of students.

4. **Vaccination Drive Management**
   - Schedule and manage vaccination drives.
   - Ensure vaccination drives are scheduled at least 15 days in advance.
   - Prevent scheduling conflicts and editing of past drives.

5. **Reporting**
   - Generate vaccination reports with filters for vaccine name, vaccination status, and other parameters.
   - Export reports to CSV/Excel/PDF.

## Architecture

This project follows a **full-stack** architecture:

- **Frontend**: React (for building a dynamic user interface)
- **Backend**: Node.js with Express (for handling API requests and business logic)
- **Database**: MongoDB (for storing student and vaccination data)
- **Authentication**: Simulated (No real authentication system required, hardcoded login)

## Tech Stack

- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express, Mongoose
- **Database**: MongoDB
- **Authentication**: Hardcoded simulated login (No real authentication)

## Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Install Node.js](https://nodejs.org/)
- **MongoDB** - [Install MongoDB](https://www.mongodb.com/try/download/community)

### Frontend (React) Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/vaccination-management-system.git
    cd vaccination-management-system
    ```

2. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the React development server:
    ```bash
    npm start
    ```

5. The frontend should now be running at `http://localhost:3000`.

### Backend (Node.js) Setup

1. Navigate to the backend directory:
    ```bash
    cd backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up the MongoDB connection (Ensure MongoDB is running locally or use a cloud database).
    - Update the MongoDB URI in the backend configuration file if needed (typically in `db.js`).

4. Start the Node.js server:
    ```bash
    npm start
    ```

5. The backend should now be running at `http://localhost:5000`.

### MongoDB Setup

1. Install MongoDB on your local machine or use a cloud service like MongoDB Atlas.
2. Create a database named `vaccination_system`.
3. Create collections for:
   - `students` (Student records)
   - `vaccination_drives` (Vaccination drive details)
   - `vaccination_records` (Vaccination records for each student)

### Database Schema

#### **Students Collection**

- `studentId`: String (unique)
- `name`: String
- `grade`: String
- `vaccinatedStatus`: Boolean
- `vaccinationDate`: Date
- `vaccineName`: String

#### **Vaccination Drives Collection**

- `driveId`: String (unique)
- `vaccineName`: String
- `date`: Date
- `availableDoses`: Number
- `applicableGrades`: Array of Strings (e.g., `['5', '6']`)

#### **Vaccination Records Collection**

- `recordId`: String (unique)
- `studentId`: String
- `vaccineName`: String
- `vaccinationDate`: Date

## API Endpoints

The backend exposes the following API endpoints for CRUD operations:

### Student Routes
- `GET /students`: Fetch all students.
- `POST /students`: Add a new student.
- `PUT /students/:studentId`: Update a student's vaccination status.
- `GET /students/:studentId`: Fetch a student by ID.

### Vaccination Drive Routes
- `GET /vaccination-drives`: Fetch all vaccination drives.
- `POST /vaccination-drives`: Add a new vaccination drive.
- `PUT /vaccination-drives/:driveId`: Update a vaccination drive.
- `GET /vaccination-drives/:driveId`: Fetch a vaccination drive by ID.

### Vaccination Records Routes
- `GET /vaccination-records`: Fetch all vaccination records.
- `POST /vaccination-records`: Add a new vaccination record.
- `GET /vaccination-records/:studentId`: Fetch vaccination records for a student.

## Running the Application Locally

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/vaccination-management-system.git
    ```

2. Navigate to the project directory and set up both frontend and backend as mentioned above.

3. Run the MongoDB server locally (or use a MongoDB cloud service like MongoDB Atlas).

4. Start the backend server and frontend development server:

    - Backend: `npm start` (in the `backend` directory)
    - Frontend: `npm start` (in the `frontend` directory)

5. Access the application at:
    - Frontend: [http://localhost:3000](http://localhost:3000)
    - Backend: [http://localhost:5000](http://localhost:5000)

## Database Queries

Here are some sample MongoDB queries that are used in this system:

- Fetch all students:
    ```javascript
    db.students.find()
    ```

- Add a new student:
    ```javascript
    db.students.insertOne({
      studentId: 'S004',
      name: 'Mark Lee',
      grade: '5',
      vaccinatedStatus: false,
      vaccinationDate: null,
      vaccineName: null
    })
    ```

- Fetch vaccination drives within the next 30 days:
    ```javascript
    db.vaccination_drives.find({
      date: { $gte: new Date(), $lt: new Date(new Date().setDate(new Date().getDate() + 30)) }
    })
    ```

## Contributions

Feel free to fork the project and submit pull requests if you'd like to contribute.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Demo Video

To view a demonstration of the working prototype, please visit the link below:

[Demo Video Link](https://drive.google.com/your-demo-video-link)

---

## Contact

For any queries or issues, feel free to contact the project maintainer at:  
**Email**: your-email@example.com
