/**
 * Created by yangbingxiao on 2016/9/21.
 */
var http = require("http");
var server = http.createServer();

server.on("request",function(request,response){
    console.log("有人请求了服务器");

    response.write("ok");
    response.end();
});
server.listen(88,function(){
    console.log("服务器已经开始监听88 端口");
});
