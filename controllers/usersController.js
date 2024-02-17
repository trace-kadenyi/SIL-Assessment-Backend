// fetch all users
const fetchAllUsers = async (req, res) => {
  try {
    // fetch users
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    // send response
    res.json(users);
  } catch (error) {
    // catch errors
    console.log(error);
  }
};

// export function
module.exports = fetchAllUsers;
