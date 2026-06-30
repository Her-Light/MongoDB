const userModel = require("../model/userModel");
//CRUD CREATE, READ, UPDATE, DELETE
const getAllUsers = async (req, res) => {
  try {
    const getAll = await userModel.find();
    return res
      .status(200)
      .json({ message: "Users fetched successfully", data: getAll });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
};

const getOneUser = async (req, res) => {
  try {
    const getAll = await userModel.findById(req.params.id);
    return res
      .status(200)
      .json({ message: "Users fetched successfully", data: getOneUser });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
};

const newUser = async (req, res) => {
  try {
    const { username, password, phoneNumber, email } = req.body;
    const user = await userModel.create({
      username,
      password,
      phoneNumber,
      email
    });
    return res
      .status(201)
      .json({ message: "User creeated successfully", data: user });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    const update = await userModel.findByIdAndUpdate(
      req.params.id,
      { phoneNumber , username },
      { new: true }
    );
    return res
      .status(200)
      .json({ message: "User updated successfully", data: update });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error updating user", error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const delete_user = await userModel.findByIdAndDelete(req.params.id);
    return res
      .status(200)
      .json({ message: "User deleted successfully", data: delete_user });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error deleting user", error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  newUser,
  updateUser,
  deleteUser
};