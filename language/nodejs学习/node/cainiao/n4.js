/**
 * Created by yangbingxiao on 2016/9/20.
 */
var fs = require("fs");
fs.readFile('input.txt',function(err, data){
    if(err){
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
});
console.log("程序执行完毕");

