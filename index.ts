// index.ts
import Koa from 'koa'; 

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'Hello World from TypeScript';
});

app.listen(9000);
