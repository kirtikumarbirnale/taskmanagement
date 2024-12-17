let express = require('express')
let app = express()

let dbconnect = require('.//config')
// let body_parsar = require('body-parser')

let studentCollection = require('./model/student')


app.set('view engine','ejs')

app.get('',(req,res)=>{
    res.render('studentpage.ejs')
  })
  app.listen(5001, () => {
    console.log('Server is running on port 3000');
  });