[rewrite_local]
^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json*? url script-response-body wywnds.js


[mitm]
hostname = p.du.163.com

var Url = $request.url;
function setQueryString(key, val) { 
    var url = Url.split('?'), search=url[1];
    var query = {};
    if (search) {
        search.split('&').forEach((item) => {
            var arr = item.split('=');
            query[arr[0]] = arr[1];
        });
    }
    query[key] = val;
    var queryArr = [];
    for (var p in query) {
        queryArr.push(p + '=' + query[p]);
    }
    return url[0]+'?'+queryArr.join('&');
};


console.log(Url);
$done({ url:Url });

//
var body=$response.body;
body = body.replace(/"tradeEndTime\":\d+/g,'"tradeEndTime":4102373543494');
$done(body);
