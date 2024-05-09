//server.js
//웹서버 
//nodejs01.pdf p.7

// 1. http 모듈 포함
const http = require ("http");

const movie = require("./movie.js");
// 2. http 서버 생성
const server = http.createServer ((req , res ) => {
    
    res.writeHead(200, { "Content-Type": "application/json" });
    (async () => {
        let movieNm = await movie();
        let movieInfo = {movieNm:movieNm, movieCd:1} 
        res.end(JSON.stringify(movieInfo));

    })();
});

// 3. 지정된 포트 및 호스트이름으로 수신 대기
// 4. 서버가 준비되면 콜백함수 호출    콜백함수
server.listen (3000 , "127.0.0.1", () => {
    console.log("server running http://127.0.0.1:3000")
})