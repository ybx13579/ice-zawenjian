//���Ľ�����  
var n = 10;
for (var i = 1; i <= n; i++) { //����  
    for (var k = 1; k <= n - i; k++) { //��ո�  
        document.writeln(" ");
    }
    for (var j = 1; j <= (2 * i - 1) ; j++) { //���Ǻ�  
        if (i == n) { //���һ��  
            document.writeln("*");
        } else if (j == 1 || j == (2 * i - 1)) { //����  
            document.writeln("*");
        } else {
            document.writeln(" ");
        }
    }
    document.writeln("<br/>");
}
console.log("hello world");