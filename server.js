const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

// import controllers
const fetchUsers = require("./controllers/usersController");
const {
  fetchPhotosPerAlbum,
  updatePhoto,
} = require("./controllers/photosController");
const {
  fetchAllAlbums,
  fetchAlbumsPerUser,
} = require("./controllers/albumsController");

// port
const port = process.env.PORT || 3500;

// cors
app.use(
  cors({
    origin: "https://sil-assessment-backend.vercel.app",
  })
);

// url encoded and json
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

// fetch all users function from usersController.js
app.get("/api/users", fetchUsers);

// fetch all albums
app.get("/api/albums", fetchAllAlbums);

// fetch albums per user
app.get("/api/albums/:id", fetchAlbumsPerUser);

// fetch photos per album
app.get("/api/photos/:id", fetchPhotosPerAlbum);

// update photo
app.put("/api/photos/:id", updatePhoto);

// // get index page in views folder
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// get 404 page in views folder
app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// listen
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
