// fetch photos
const fetchPhotos = async (req, res) => {
  try {
    // fetch photos
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const photos = await response.json();
    // send response
    res.json(photos);
  } catch (error) {
    // catch errors
    console.log(error);
  }
};

module.exports = fetchPhotos;
