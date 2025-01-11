const User = require("../models/User");


const createUser = async (userData) => {
    try {
        return await User.create(userData);
    } catch (error) {
        throw new Error("Error creating user: " + error.message);
    }
};


const findUserByEmail = async (email) => {
    try {
        return await User.findOne({ email });
    } catch (error) {
        throw new Error("Error finding user: " + error.message);
    }
};


const getAllUsers = async () => {
    try {
        return await User.find();
    } catch (error) {
        throw new Error("Error fetching users: " + error.message);
    }
};


const deleteUser = async (id) => {
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            throw new Error("User not found!");
        }
        return deletedUser;
    } catch (error) {
        throw new Error("Error deleting user: " + error.message);
    }
};

const updateUser = async (id, updateData) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true
        });
        if (!updatedUser) {
            throw new Error("User not found!");
        }
        return updatedUser;
    } catch (error) {
        throw new Error("Error updating user: " + error.message);
    }
};

module.exports = { createUser, findUserByEmail, getAllUsers, deleteUser, updateUser };
