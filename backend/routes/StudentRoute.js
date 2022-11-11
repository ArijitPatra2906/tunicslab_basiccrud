const router = require("express").Router();

const Student = require("../models/StudentModel")


//Create new student
router.post("/", async (req, res) => {
    const newStudent = new Student(req.body);
    try {
        const savedStudent = await newStudent.save();
        res.status(200).json(newStudent);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get total number of student
router.get("/count", async (req, res) => {
    try {
        const totalStudent = await Student.countDocuments();

        res.status(200).json(totalStudent);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Update student
router.put("/:id", async (req, res) => {
    try {
        const faq = await Student.findById(req.params.id);
        try {
            const updatedFaq = await Student.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json("Updated Student!");
        } catch (err) {
            res.status(500).json(err);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//Delete student
router.delete("/:id", async (req, res) => {
    const student = await Student.findById(req.params.id);
    try {
        await student.delete();
        res.status(200).json("Student has been deleted!");
    } catch (err) {
        res.status(500).json(err);
    }

});


// Get single student
router.get("/:id", async (req, res) => {
    try {
        const faq = await Student.findById(req.params.id);

        res.status(200).json(faq);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get all student
router.get("/", async (req, res) => {
    try {
        const students = await Student.find();

        res.status(200).json(students)

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;