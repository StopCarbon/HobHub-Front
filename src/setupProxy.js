const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    // /user로 시작하는 경로 (유저 정보 저장, 유저 취미 저장 & 추가, 유저 취미 리스트 반환)
    // app.use(
    //     createProxyMiddleware('/user', {
    //         target: process.env.REACT_APP_API_URL,
    //         changeOrigin: true,
    //     }),
    // );
    // /board로 시작하는 경로
    // app.use(
    //     createProxyMiddleware('/board', {
    //         target: process.env.REACT_APP_API_URL,
    //         changeOrigin: true,
    //     }),
    // );
    // for FLASK
    // app.use(
    //     createProxyMiddleware('/send_message', {
    //         target: process.env.FLASK_URL,
    //         changeOrigin: true,
    //     }),
    // );
    // app.use(
    //     createProxyMiddleware('/webhook', {
    //         target: process.env.FLASK_URL,
    //         changeOrigin: true,
    //     }),
    // );
    // app.use(
    //     createProxyMiddleware('/hobbylist', {
    //         target: process.env.FLASK_URL,
    //         changeOrigin: true,
    //     }),
    // );
};
