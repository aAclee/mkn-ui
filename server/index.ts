import Koa from 'koa';
import Router from 'koa-router';
import views from 'koa-views';
import serve from 'koa-static';

const app = new Koa();
const router = new Router();

function add(a: number, b: number): number {
  return a + b;
}

app.use(serve('./dist'));

console.log('doing other stuff');

router.get('/', async function (ctx, next) {
  await ctx.render('index')
})

console.log(add(1, 3));

app.use(views(__dirname + '/templates', {
  extension: 'pug'
}));

app.use(router.routes());

app.listen(3000);

console.log('Server running on port 3000');