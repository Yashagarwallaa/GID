const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const homerouter = require('./routes/home')
const app = express();
app.use(express.static('public'));

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/',homerouter);

app.listen(3000,()=>{
    console.log("Running on port 3000");
})

const uriuser = "mongodb+srv://yashagarwalla001:A8S05n6mixpfdDvk@books.zlmhuzx.mongodb.net/booksdata";
mongoose.connect(uriuser,
  {useNewUrlParser : true}, 
  {useUnifiedTopology : true}
).then(() => {
   console.log("Connected To Book Database");
}).catch((err) => {
   console.log("Error in connecting to database", err);
});

