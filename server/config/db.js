const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected successfully :", res.connection.host);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDb;
