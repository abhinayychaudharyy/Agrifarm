const mongoose = require('mongoose');

const connectToMongo = () => {
  mongoose.connect("mongodb+srv://Abhinay_chaudhary:Abhinay@30052006@cluster0.hwdegsp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log('Connected to MongoDB');
  });
}

module.exports = connectToMongo;