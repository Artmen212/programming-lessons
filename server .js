const http = require("http");

const requestHandler = (request , response) => {
    responce.end("Hello World!");
    
};

http.createServer(requestHandler).listen(3000);