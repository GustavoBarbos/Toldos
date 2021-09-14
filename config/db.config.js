const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://gustavobs:22722722@cluster0.naiwk.mongodb.net/todoApi?retryWrites=true&w=majority';

const connect = async () => {
 
  const connection = await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log(`DataBase connected: ${connection.connections[0].name}`);
  
};

module.exports = connect
