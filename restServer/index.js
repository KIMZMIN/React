
const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const productRoute = require("./routes/product");
const customerRoute = require("./routes/customer");
const todoRoute = require("./routes/todo");
const boardRoute = require("./routes/boardRouter");
const userRoute = require("./routes/userRouter");
const app = express();
const port = 3000;

//================================================

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("tiny"));
app.use("/product", productRoute);
app.use("/customer", customerRoute);
app.use("/todo", todoRoute);
app.use("/board", boardRoute);
app.use("/user", userRoute);

//================================================

app.get("/", (req, res)=>{
    res.send("RestServer >>> hello world!!");
})

app.listen(port, ()=>{
    console.log(`server runing http://localhost:${port}`)
});