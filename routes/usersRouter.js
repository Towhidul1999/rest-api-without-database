const router = require("express").Router();
const { getUsers, createUser, updateUser, deleteUser } = require("../controllers/usersControllers");

router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
