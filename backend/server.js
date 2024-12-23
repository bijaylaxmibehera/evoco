const express=require('express');
const app=express();
const PORT=3000;
const {conectDB, connectDB}=require("./db/connectDB");
connectDB();

app.get("/", (req, res) => {
    res.send("Hello, welcome to event management API");
  });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});