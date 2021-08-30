const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONDODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Base de datos online");
  } catch (error) {
    console.log(error);
    throw new Error("Error de conexion a la base de datos");
  }
};

module.exports = {
  dbConnection,
};
