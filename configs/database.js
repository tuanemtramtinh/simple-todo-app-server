const mongoose = require('mongoose');
require('dotenv').config();

module.exports.connect = async () => {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log('Kết nối database thành công');
}