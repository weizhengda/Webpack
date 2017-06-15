require('../css/app.css');



var two = require('./two.js'); //./必须加上去的,只要是当前目录里面的文件
//two这个变量，现在就等于tow.js向外暴露出来的东西


var greet = require('./three.js');

alert(greet.text);
