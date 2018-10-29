const http = require('http');
var store = require('./store');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  if(req.url==='/'){
    res.writeHead(statusCode,{'Content-Type': 'application/json'});
    res.end("No data!");
  }  
  else if(req.url === '/api/favoritebook') {
    res.writeHead(200, { 'Content-Type': 'application/json'});

    var bookStore = store.booksModule;
    var favBook = 'Favorite Book: ' + bookStore.favoriteBook().title + ' - Author: ' + bookStore.favoriteBook().author;
    console.log(favBook);

    res.end(JSON.stringify(favBook));
  }
  else if(req.url === '/api/getbooks') {
res.writeHead(200, { 'Content-Type': 'application/json'});

    var books = store.booksModule.getBookRecommendations();
    console.log(books);

    res.end(JSON.stringify(books));
  }
  

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});