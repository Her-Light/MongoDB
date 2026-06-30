const express = require('express');
const {
    getAllUsers, 
    getOneUser, 
    newUser,
    deleteUser,
    updateUser
} = require("../controller/userController");

const router = express.Router();

router.get("/getAllUsers", getAllUsers);
router.get("/getOneUsers/:id", getOneUser);
router.post("/newUsers", newUser);
router.patch("/updateUsers/:id", updateUser);
router.delete("/deleteUsers/:id", deleteUser);

module.exports = router;
