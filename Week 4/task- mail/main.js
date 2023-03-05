const express = require("express");
const app = express();
let PORT =5000;

app.get("/", (req, res)=>{
    res.send("i am server");

});


const start = async() => {
    try{
        app.listen(PORT, ()=> {
            console.log(`port is on ${PORT}`);
        })
    }
    catch(error) {}

}