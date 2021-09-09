require("dotenv").config();

const productsData = require ("./data/products");
const connectDB = require ("./config/db");
const Product = require ("./models/Product");

connectDB();

//this is the fn that should import our data.
const importData = async () => {
  try{

    await Product.deleteMany({});

    await Product.insertMany(productsData);

    console.log("Data import Success!");
    process.exit();

  }catch (error) {
    console.error(`Error with Data Import: ${error.message}!!`);
    process.exit(1);
  }
};

importData();