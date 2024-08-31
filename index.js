const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public'))); //har request ke liye yaha file dhundna
app.set('view engine', 'ejs');

app.get("/", function(req,res){
    res.render('index') //index.ejs file
});

app.get('/profile/:username', function(req,res){
    // req.params.username;
    res.send(`Welcome ${req.params.username}`)
})
app.get('/profile/:username/:age', function(req,res){
    // req.params.username;
    res.send(req.params)
})


app.listen(3000, function(){
    console.log("Running fine");
})