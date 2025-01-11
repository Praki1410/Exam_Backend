const Exam = require("../models/Exam");


const createExam = async (examData) => {
  try {
    return await Exam.create(examData);
  } catch (error) {
    throw new Error("Error creating exam: " + error.message);
  }
};


const getAllExams = async () => {
  try {
    return await Exam.find().populate("questions");
  } catch (error) {
    throw new Error("Error fetching exams: " + error.message);
  }
};


const getExamById = async (id) => {
  try {
    return await Exam.findById(id).populate("questions");
  } catch (error) {
    throw new Error("Error fetching exam: " + error.message);
  }
};


const updateExam = async (id, updateData) => {
  try {
    const updatedExam = await Exam.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
    if (!updatedExam) throw new Error("Exam not found!");
    return updatedExam;
  } catch (error) {
    throw new Error("Error updating exam: " + error.message);
  }
};


const deleteExam = async (id) => {
  try {
    const deletedExam = await Exam.findByIdAndDelete(id);
    if (!deletedExam) throw new Error("Exam not found!");
    return deletedExam;
  } catch (error) {
    throw new Error("Error deleting exam: " + error.message);
  }
};

module.exports = {
  createExam,
  getAllExams,
  getExamById,
  updateExam,
  deleteExam,
};
