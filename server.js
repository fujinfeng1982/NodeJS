/**
 * Created with JetBrains PhpStorm.
 * User: Administrator
 * Date: 12-12-1
 * Time: 下午3:26
 * To change this template use File | Settings | File Templates.
 */
var http=require("http");
var url=require("url");
function start(route,handle)
{
    function onRequest(request,response)
    {
        var pathname=url.parse(request.url).pathname;
        console.log("Request for "+pathname+" received");
        route(handle,pathname,response,request);
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started!");
}
exports.start=start;