const  express = require("express");
const jokes = require('./jokes.js')


const path = require("path");



const app = express();
const port = 3000;

app.use(express.static("./public"))

const button1Info = {alpha: "a",beta: "b",}




app.get("/", (req, res) => {
    
    res.status(200).sendFile(path.resolve(__dirname, "./public/start.html"));
  });
  
  app.get("/about", (req, res) => {
    console.log(req);
    res.send('ABOUT');
  });

  app.get('/button1/API', (req, res)=>{
    let arrayNumber = Math.floor(Math.random()*jokes.length)
    res.status(200).json(jokes[arrayNumber]);

    console.log("Button1 API Requreste");
  })
  
 
   
  app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
  });
  