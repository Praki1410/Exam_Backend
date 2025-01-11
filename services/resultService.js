const Result = require("../models/Result");

const createResult = async (resultData) => {
  try {
    return await Result.create(resultData);
  } catch (error) {
    throw new Error("Error creating result: " + error.message);
  }
};

const getAllResults = async () => {
  try {
    return await Result.find().populate("exam student");
  } catch (error) {
    throw new Error("Error fetching results: " + error.message);
  }
};

const getResultByStudent = async (studentId) => {
  try {
    return await Result.find({ student: studentId }).populate("exam");
  } catch (error) {
    throw new Error("Error fetching student's results: " + error.message);
  }
};

const deleteResult = async (id) => {
  try {
    const deletedResult = await Result.findByIdAndDelete(id);
    if (!deletedResult) throw new Error("Result not found");
    return deletedResult;
  } catch (error) {
    throw new Error("Error deleting result: " + error.message);
  }
};

module.exports = {
  createResult,
  getAllResults,
  getResultByStudent,
  deleteResult,
};
