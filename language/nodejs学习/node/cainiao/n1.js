//空心金字塔  
var n = 10;
for (var i = 1; i <= n; i++) { //行数  
    for (var k = 1; k <= n - i; k++) { //打空格  
        document.writeln(" ");
    }
    for (var j = 1; j <= (2 * i - 1) ; j++) { //打星号  
        if (i == n) { //最后一行  
            document.writeln("*");
        } else if (j == 1 || j == (2 * i - 1)) { //两边  
            document.writeln("*");
        } else {
            document.writeln(" ");
        }
    }
    document.writeln("<br/>");
}
console.log("hello world");