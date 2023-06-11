console.log('running');

const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page);
    if(page === '/'){
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }else if(page === '/api'){
        if('userChoice' in params){
            res.writeHead(200, {'Content-Type': 'application/json'});
            let objToJson = {
                player: 'won'
            }
            const ranNum = Math.random() * 100;
            let botChoice = '';
            if(ranNum > 50){
                botChoice = 'shield';
            } else {
                botChoice = 'cross';
            }
            console.log(params.userChoice , 'and' ,botChoice)
            if(botChoice === params.userChoice){
                console.log('en el uno')
                objToJson.player = 'won'
            }else{
                console.log('en el do')
                objToJson.player = 'lost'
            }            
            res.end(JSON.stringify(objToJson));
        }
    }else if (page == '/styles/style.css'){
        fs.readFile('styles/style.css', function(err, data) {
          res.write(data);
          res.end();
        });
    }else if (page == '/js/main.js'){
        fs.readFile('js/main.js', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });
      }else if(page === '/img/toss_a_coin2.jpg'){
        fs.readFile('img/toss_a_coin2.jpg', function(err, data) {
            res.write(data);
            res.end();
        })
    } else if(page === '/img/cross.JPG'){
        fs.readFile('img/cross.JPG', function(err, data) {
            res.write(data);
            res.end();
        })
    }else if(page === '/img/shield.JPG'){
        fs.readFile('img/shield.JPG', function(err, data) {
            res.write(data);
            res.end();
        })
    }
});

server.listen(8000);