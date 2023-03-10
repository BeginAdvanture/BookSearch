let express = require("express");

let app = express();

//node 환경설정 
let port = process.eventNames.PORT || 80;
app.use(express.static("public_html"));
app.listen(port,function(){
    console.log("HTML 서버 시작");
});