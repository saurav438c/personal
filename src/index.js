const express = require('express');
const moment = require('moment');
//const express=router();//
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const router = require('./routes/route.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://saurav438c:Bharat123@cluster0.ueecgjt.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

//<<<<<<< HEAD
/*app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        next();
  }
  );*/

  app.use (
    function (req, res, next) {
        let a =moment().format('DD-MM-YYYY');
        const b="Your IP Addresss is: " + req.socket.localAddress
        let url=req.originalUrl
        
        console.log(a,b)
        console.log(url)
        next();
  }
  )
  //=======
// app.use (
//     function (req, res, next) {
//         console.log ("inside GLOBAL MW");
//         next();
//   }
//   );
  
//>>>>>>> 9e4c16d4ea1ae2e8bdde64eac93caf8467fd54bc


  /*app.use(
  function (req, res,next) {
    res.send("Your IP Addresss is: " + req.socket.localAddress);
    next();
  }
  );*/







app.use('/', route);
//app.use('/Router',Router );


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
