require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path"); 

const Member = require("./models/member");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); 
// MongoDB Connection
// ✨ इसकी जगह यह लिखो:
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 5000, // अगर 5 सेकंड में कनेक्ट न हो तो तुरंत दोबारा ट्राई करे
  bufferCommands: false,          // बफ़रिंग को पूरी तरह बंद कर दे
})


// Home Route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "join-form.html"));
});

// Join Route
app.post("/api/join", async (req, res) => {
  try {
    console.log("📩 Data Received:", req.body);

    const member = new Member(req.body);

    await member.save();

    res.status(201).json({
      success: true,
      message: "Member Registered Successfully",
      member,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Start Server
const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
