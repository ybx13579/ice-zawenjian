/**
 * Created by yangbingxiao on 2016/9/21.
 */
var http = require('http');

var option, req;

option = {
    host: '127.0.0.1',
    port: 88,
    path: '/login'
};

req = http.request(option, function(res){

    if(res.statusCode === 200) {
        console.log('ok');
    }

    res.on('data', function(chunk){
        console.log('the result is ', chunk.toString());
    });
});

req.on('error', function(error){
    console.log('something is wrong:', error.message);
});

req.end();