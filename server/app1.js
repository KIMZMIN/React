// 1. http 모듈 포함
const http = require('http');
const url = require("url");
const hostname = '127.0.0.1';
const port = 3000;

// 2. http 서버 생성(요청이 수신되면 응답 처리)
const server = http.createServer((req, res) => { 
    const myURL = new URL("http://127.0.0.1" + req.url);
    const pathname = myURL.pathname;
    const _url = url.parse(req.url , true );
//  const pathname = _url.pathname;

 if (pathname == "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end('Hello Text World');

 } else if (pathname == "/json"){
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'application/json'); 
    res.end(
        JSON.stringify({
            data:"Hello World"
        })
    );
 
 } else if (pathname == "/html"){
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/html'); 
    res.write(`<html lang='ko'><head><meta charset="UTF-8"></head>
    <body>안녕하세요 Html World</body></html>`);
    res.end();
 
 } else if(pathname == "/text"){
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain'); 
    res.end('Hello text Worldgggg');

 } else{
    res.statusCode = 404;
    res.end("error");
 };//end of if-else
 console.log("id", myURL.searchParams.get("username"));

});

// 3. 지정된 포트 및 호스트이름으로 수신 대기
server.listen(port, hostname, () => { 
 console.log(`Server running at http://${hostname}:${port}/`);
});