const KKB=require('./kkb');

const app=new KKB();

// app.use((req,res)=>{
//     res.writeHead(200);
//     res.end('hi  kaikeba')
// });

// app.use(ctx=>{
//     ctx.body='hhh...';
// });

// app.use(async (ctx,next)=>{
//     ctx.body='1';
//
//     await next();
//
//     ctx.body+='2';
// });
//
// app.use(async (ctx,next)=>{
//     ctx.body+='3';
//
//     await next();
//
//     ctx.body+='4';
// });
//
// app.use(async (ctx,next)=>{
//     ctx.body+='5';
// });
//13542

//static静态中间件
// const static=require('./static');
// app.use(static(__dirname+'/public'));

//router中间件
const Router=require('./router');
const router=new Router();
router.get('/index',async ctx=>{ctx.body='index page'});
router.get('/list',async ctx=>{ctx.body='list page'});
router.post('/about',async ctx=>{ctx.body=[{name:'sofiya'}]});

app.use(router.routes())
app.listen(3000)

