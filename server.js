const express = require("express");
const next = require("next");
const server = express();
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
// next 메소드의 인자로 받을수 있는 객체의 속성들은
//  dev : 개발모드에서 Next.js를 실행할지 여부. 기본값은 false
//  dir : Next.js 프로젝트의 위치. 기본값은 '.'
//  quiet : 서버정보가 포함된 오류메시지 출력 여부. 기본값은 false
//  conf : next.config.js와 동일한 객체. 기본값은 '{}'

const handle = app.getRequestHandler(); // Next.js의 기본 라우팅방식을 따르도록 함


server.use(express.json());
server.use(express.urlencoded({extended : false}));

app.prepare().then(() => {

  server.post("/test_post", (req, res) => {
    const text = req.body.testText;
    res.send(text)
  });

  // 위에 나열된 url이 아니면 모두 Next.js의 기본 라우팅을 따르도록 함
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("listening to 3000");
  });
});