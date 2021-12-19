// 建立代理 (可多个代理)
const proxy = require('http-proxy-middleware')
module.exports= function(app) {
    app.use(
        proxy('/api1',{
            target:'http://127.0.0.1:5000',
            changeOrigin:true,
            pathRewrite:{'^/api1':''}
        }),
        proxy('/api2',{
            target:'http://127.0.0.1:5001',
            changeOrigin:true,
            pathRewrite:{'^/api2':''}
        }),
    )
}