const {v4: uuidv4} = require("uuid");
let users = require("../models/usersModels");

//get all users
const getUsers = (req, res)=>{
    res.status(200).json({users})
};

//create user
const createUser = (req, res)=>{
    const id = uuidv4();
    const userName = req.body.username;
    const email = req.body.email;

    const newUser = {
        id,
        userName,
        email
    };
    users.push(newUser)
    res.status(201).json({users})
}

// update user
const updateUser = (req, res) => {
    const userid = req.params.id;
    const { username, email } = req.body;
  users
      .filter((user) => user.uuid === userid)
      .map((selecteduser) => {
        selecteduser.username = username;
        selecteduser.email = email;
      })
    res.status(200).json(users);
  };

  //delete user
  const deleteUser = (req, res) => {
    const userid = req.params.id;
    users = users.filter((user) => user.uuid !== userid)
    res.status(200).json(users);
  };
  

module.exports = {getUsers, createUser, updateUser, deleteUser}