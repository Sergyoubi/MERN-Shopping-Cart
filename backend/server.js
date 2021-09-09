require("dotenv").config();

const express = require('express');
const connectDB = require("./config/db");
const app = express();
const productRoutes = require("./routes/productRoutes")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {console.log(`Server running at port ${PORT}`)});
