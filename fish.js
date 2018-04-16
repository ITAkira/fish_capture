const koa=require('koa');
const static=require('koa-static');

const pathlib=require('path');

const server=new koa();
server.listen(8081);
server.use(static(pathlib.resolve(__dirname, './')));
