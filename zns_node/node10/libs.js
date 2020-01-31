const queryString=require('querystring');
//所有路径请求都接收


module.exports=function () {
    return function (req,res,next) {
        var str='';
        req.on('data',function (data) {
            str+=data;
        });
        req.on('end',function () {

            req.body=queryString.parse(str);
            next()
        });
    }
};
