const express = require("express");
const router = express.Router();

const Member = require("../models/member");

router.post("/join", async (req, res) => {
    try {

        console.log("✅ POST /api/join HIT");
        console.log(req.body);

        const member = new Member(req.body);

        await member.save();

        res.status(201).json({
            success: true,
            message: "Member Registered Successfully"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
});

module.exports = router;