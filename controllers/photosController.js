// fetch photos per album
const fetchPhotosPerAlbum = async (req, res) => {
  try {
    // get id from params
    const { id } = req.params;
    // fetch photos from jsonplaceholder
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
    );
    const data = await response.json();
    // send data to client
    res.json(data);
  } catch (error) {
    // catch errors
    console.log(error);
  }
};

// update photo
const updatePhoto = async (req, res) => {
  try {
    // get id from params
    const { id } = req.params;
    // get title and url from body
    const { title, url } = req.body;
    // fetch photos from jsonplaceholder
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          title,
          url,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const data = await response.json();
    // send data to client
    res.json(data);
  } catch (error) {
    // catch errors
    console.log(error);
  }
};

// export function
module.exports = {
  fetchPhotosPerAlbum,
  updatePhoto,
};
