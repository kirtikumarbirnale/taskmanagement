let mongoose = require('mongoose')
let database = 'Student'
mongoose.connect(`mongodb://127.0.0.1:27017/${database}`)
.then(()=>{
    console.log('mongoose connect successfully...');
}).catch(()=>{
    console.log('mongoose connect Filed...');
})