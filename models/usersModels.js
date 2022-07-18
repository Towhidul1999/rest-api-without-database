const {v4: uuidv4} = require("uuid");

const users = [
    {
        uuid: uuidv4(),
        username: "Anisul Islam",
        email: "lalala@gmail.com"
    },
    {
        uuid: uuidv4(),
        username: "Towhidul Islam",
        email: "towhidul@gmail.com"
    }
];

module.exports = users;