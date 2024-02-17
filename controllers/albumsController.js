// fetch all albums in the DB
const fetchAllAlbums = async (req, res) => {
  try {
    // fetch albums
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albums = await response.json();
    // send response
    res.json(albums);
  } catch (error) {
    // catch errors
    console.log(error);
  }
};

// fetch albums per user
const fetchAlbumsPerUser = async (req, res) => {
  try {
    // get id from params
    const { id } = req.params;
    // fetch albums
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums?userId=${id}`
    );
    const albums = await response.json();
    // check if albums exist
    if (!albums.length) {
      return res.json("No albums found for this user or user does not exist");
    }
    // send response
    res.json({
      ALBUMCOUNT: albums.length,
      albums,
    });
  } catch (error) {
    // catch errors
    console.log(error);
  }
};

// export functions
module.exports = {
  fetchAllAlbums,
  fetchAlbumsPerUser,
};
