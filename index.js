const express=require('express');
const path=require('path');
const app=express();
const port=8000;

const staticPath=path.join(__dirname,"/public");
app.use(express.static(staticPath));

app.get("/index",(req,res)=>{
   res.sendFile(path.join(__dirname+'/index.html'));
});
app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname+'/about.html'));
});
app.get("/staffing",(req,res)=>{
    res.sendFile(path.join(__dirname+'/staffing.html'));
});
app.get("/services",(req,res)=>{
    res.sendFile(path.join(__dirname+'/services.html'));
});
app.get("/career",(req,res)=>{
    res.sendFile(path.join(__dirname+'/career.html'));
});
app.get("/news",(req,res)=>{
    res.sendFile(path.join(__dirname+'/news.html'));
});
app.get("/location",(req,res)=>{
    res.sendFile(path.join(__dirname+'/location.html'));
});
app.get("/apply",(req,res)=>{
    res.sendFile(path.join(__dirname+'/apply.html'));
});

app.listen(port,()=>{
    console.log(`the application is started on port ${port}`);
})
