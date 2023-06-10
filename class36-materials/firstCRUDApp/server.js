console.log('May node be with you');

const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient; //8uoylx0x6TuyOpNk mongo atlas
//eduardocepurniece || WXBnMeLiSh9XHfOt


//nos quedamos en changing the database
//no nos podemos conectar a la base de datos de mongodb atlas por que estamos conectados en una vpn


const app = express();

app.listen(3000, function(){
    console.log('listening on 3000')
});

console.log('cretasico')

MongoClient.connect('mongodb+srv://eduardocepurniece:WXBnMeLiSh9XHfOt@cluster0.xdylzhk.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
  })
  .catch(error => console.error(error))

app.use(bodyParser.urlencoded({extend:true}));

app.get('/', (req,res) => {
    console.log(__dirname)
    res.sendFile(__dirname + '/index.html')
});

app.post('/quotes', (req, res) => {
    console.log('"Insert random quote here"')
    console.log(req.body)
});