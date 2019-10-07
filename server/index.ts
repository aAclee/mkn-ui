import Koa from 'koa';
import Router from 'koa-router';
import views from 'koa-views';
import serve from 'koa-static';

// GraphQL
import graphqlHTTP from 'koa-graphql';
import schema from './graphql/schema';

const app = new Koa();
const router = new Router();

app.use(serve('./dist'));

router.get('/', async function (ctx) {
  await ctx.render('index');
});

app.use(views(__dirname + '/templates', {
  extension: 'pug',
}));

router.all('/graphql', graphqlHTTP({
  schema,
  graphiql: true, //process.env.NODE_ENV === 'development',
}));

app.use(router.routes());

app.listen(3000);
