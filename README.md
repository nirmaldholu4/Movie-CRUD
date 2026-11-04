# 🎬 Movie Management System – Backend CRUD API

## 📌 About The Project

**Movie Management System** is a backend-based REST API project developed using **Node.js, Express.js, MongoDB, and Mongoose**.

This project allows users to manage movie records easily through different API operations. Users can add new movies, display all movies, search for a specific movie, update existing movie details, and delete movies from the database.

The main purpose of this project is to understand backend development, REST API concepts, database connectivity, and CRUD operations using MongoDB.

---

## 🚀 Technologies Used

- **Node.js** – JavaScript runtime environment.
- **Express.js** – To create the server and handle API routes.
- **MongoDB** – NoSQL database to store movie records.
- **Mongoose** – To connect MongoDB with Node.js and manage movie data.
- **JavaScript** – To write backend functionality.
- **Postman** – To test API requests and responses.

---

## ⚙️ Features

- Add New Movies
- Display All Movies
- Search a Specific Movie
- Update Movie Details
- Delete a Specific Movie
- MongoDB Database Connectivity
- REST API Integration
- JSON Request and Response Handling

---

## 📂 Project Structure

```text
Movie-Management-System/
│
├── node_modules/
│
├── server.js
│
├── package.json
│
├── package-lock.json
│
└── README.md
```

---

## 🔄 Project Workflow

The project works through a simple client-server architecture.

1. **Client Request:** The user sends an API request using Postman.
2. **Express Server:** Express receives the request and identifies the API route.
3. **Mongoose:** Mongoose processes the request and communicates with MongoDB.
4. **MongoDB Database:** Movie information is stored, retrieved, updated, or deleted.
5. **Server Response:** Express sends the result back to the client in JSON format.

### Workflow Diagram

```text
       Client / Postman
              |
              |
        API Request
              |
              |
       Express Server
              |
              |
        API Routes
              |
              |
          Mongoose
              |
              |
       MongoDB Database
              |
              |
       Database Result
              |
              |
       JSON Response
              |
              |
         Client
```

---

## 🔗 API Endpoints

| No. | Method | Endpoint | Description |
|---|---|---|---|
| 1 | GET | `/` | Home Page |
| 2 | POST | `/addMovies` | Add New Movie |
| 3 | GET | `/getAllMovies` | Display All Movies |
| 4 | GET | `/getMovie` | Find Specific Movie |
| 5 | PUT | `/updateMovie` | Update Movie |
| 6 | DELETE | `/deleteMovie` | Delete Movie |

---

## 📝 Movie Data Structure

Each movie contains the following information:

```json
{
  "title": "Avengers",
  "genre": "Action",
  "director": "Joss Whedon"
}
```

---

## 🛠️ Installation & Setup

**Step 1: Clone Repository**

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

**Step 2: Open Project Folder**

```bash
cd Movie-Management-System
```

**Step 3: Install Dependencies**

```bash
npm install express mongoose
```

**Step 4: Start MongoDB**

Make sure MongoDB is installed and running on your system.

**Step 5: Run Project**

```bash
node server.js
```

**Step 6: Open API**

```text
http://localhost:3000
```

---

## 📸 Project Screenshots

Here are the screenshots of the Movie Management System API tested using Postman.

### 1. Add Movie API
![Add Movie](screenshots/add-movie.png)

### 2. Display All Movies API
![Display Movies](screenshots/get-all-movies.png)

### 3. Search Specific Movie API
![Search Movie](screenshots/get-movie.png)

### 4. Update Movie API
![Update Movie](screenshots/update-movie.png)

### 5. Delete Movie API
![Delete Movie](screenshots/delete-movie.png)

---

## 🎥 Project Explanation Video

Watch the complete project explanation video to understand how the Movie Management System works, how APIs are created, and how MongoDB handles movie records.

[![Movie Management System – Project Explanation](screenshots/video-thumbnail.png)](YOUR_VIDEO_LINK_HERE)

**▶ Watch Project Explanation Video:** [Click Here](YOUR_VIDEO_LINK_HERE)

---

## 🎯 What I Learned

Through this project, I learned:

- How to create a backend server using Node.js and Express.js.
- How to connect MongoDB with Mongoose.
- How to create and manage REST APIs.
- How to perform CRUD operations.
- How to send and receive JSON data.
- How to test API endpoints using Postman.
- How client-server communication works.

---

## 👨‍💻 Developer

**Nirmal Dholu**

- GitHub: [My GitHub](https://github.com/nirmaldholu4)
- Portfolio: [My Portfolio](https://nirmaldholu4-my-portfolio.vercel.app/)

---

⭐ If you like this project, don't forget to give it a star!