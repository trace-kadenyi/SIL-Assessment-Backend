const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const fetchUsers = require("./controllers/usersController");
const fetchPhotos = require("./controllers/photosController");
const {
  fetchAllAlbums,
  fetchAlbumsPerUser,
} = require("./controllers/albumsController");

const port = process.env.PORT || 3500;

// cors
// const whiteList = [
//   "https://www.google.com/",
//   "http://localhost:3500",
//   "https://jsonplaceholder.typicode.com/",
//   "https://www.google.com/",
// ];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whiteList.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   optionsSuccessStatus: 200,
// };

app.use(cors());

// url encoded and json
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

// fetch all users function from usersController.js
app.get("/api/users", fetchUsers);

// fetch all albums
app.get("/api/albums", fetchAllAlbums);

// fetch albums per user
app.get("/api/albums/:id", fetchAlbumsPerUser);

// fetch photos
app.get("/api/photos", fetchPhotos);

// // get index page in views folder
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// get 404 page in views folder
app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
