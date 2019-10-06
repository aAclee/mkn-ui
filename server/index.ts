import Koa from 'koa';
import Router from 'koa-router';
import views from 'koa-views';
import serve from 'koa-static';

const app = new Koa();
const router = new Router();

app.use(serve('./dist'));

router.get('/', async function (ctx) {
  await ctx.render('index')
})

app.use(views(__dirname + '/templates', {
  extension: 'pug'
}));

app.use(router.routes());

app.listen(3000);
