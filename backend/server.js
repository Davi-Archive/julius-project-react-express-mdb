const express = require('express');
const dotenv = require('dotenv').config({ path: './.env' });
const colors = require('colors');
const cors = require("cors");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger/swagger_output.json");

const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile));
// //index of the API
// app.get("/", (req, res) => {
//   res.status(200)
//   res.sendFile(path.join(__dirname, "./views/index.html"));
// });

//  about section route
app.use("/api/posts", require("./routes/postRoutes"));

// user Create and Login
app.use("/api/users", require("./routes/userRoutes"));

const PORT = process.env.PORT || 3001;
connectDB();

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
