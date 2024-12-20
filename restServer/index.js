
const express = require("express");
const cors = require('cors');
const app = express();

const morgan = require('morgan');
const productRoute = require("./routes/product");
const customerRoute = require("./routes/customer");
const todoRoute = require("./routes/todo");
const boardRoute = require("./routes/boardRouter");
const userRoute = require("./routes/userRouter");
const bookReviewRoute = require("./routes/bookReview");
const bookReplyRoute = require("./routes/bookReply");
const port = 3000;

//===========================================javascript

app.use('/uploads', express.static('uploads'));

//app.use('/', express.static('./uploads'))
// app.use(express.static(__dirname + '/public'));
//app.use('/reviewList', express.static(__dirname + 'public'));
// app.use('/', express.static(__dirname + '/uploads'));
//const upload = multer({ dest: 'uploads/' });
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
app.use("/review", bookReviewRoute);
app.use("/reply", bookReplyRoute);

//================================================

app.get("/", (req, res)=>{
    res.send("RestServer >>> hello world!!");
})

app.listen(port, ()=>{
    console.log(`server runing http://localhost:${port}`)
});