/******
作者：林阿斗
******/

[rewrite_local]
^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json*? url script-response-body https://raw.githubusercontent.com/3488888725/Quantumult-X/main/rewrite/wywnds.js

[mitm]
hostname = p.du.163.com

var body=$response.body;
body = body.replace(/"tradeEndTime\":\d+/g,'"tradeEndTime":4102373543494');
$done(body);
