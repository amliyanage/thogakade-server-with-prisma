import express from "express"
import customerRoutes from "./routes/customer-routers"
const app = express()

app.use(express.json())
app.use('/',(req , res , next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type');

    next();
})

app.use('/customer',customerRoutes)

app.listen(300,(err)=>{
    console.log("server running on port 3000")
})

app.use('/',(req,res)=>{
    res.status(200).send('Not Found')
})