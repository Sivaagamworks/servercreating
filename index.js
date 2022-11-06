const  express = require('express');
const mongoose=require('mongoose');
const http=require('http')
const app = express()
app.use(express.json());
//db connection//
mongoose.connect("mongodb+srv://siva:CGD4KKLX635lDapZ@cluster0.tveigf0.mongodb.net/connectdatabase?retryWrites=true&w=majority",{
useNewUrlParser:true,
useUnifiedTopology:true
},(err)=>{
    if(!err){
        console.log("connected db");
    }
    else{
        console.log("lost connection");
    }
})

const schema={
      sName:String,
      email:String,
      id:Number
}
const monModel=mongoose.model("NEWCOL",schema);

//post//
app.post("/post",async(req,res)=>{
    console.log("inside post function");
    const data=new monModel({
        sName:req.body.sName,
        email:req.body.email,
        id:req.body.id

    });

const datavalue=await data.save();
res.json(datavalue);

})



const port = 3000;
app.get('/', (req, res) => res.send('good evening  these server is api /after enter /morning ,/evening and  /night'))
app.get('/morning', (req, res) => res.send('good morning'))
app.get('/evening', (req, res) => res.send('good evening'))
app.get('/night', (req, res) => res.send('good night'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))