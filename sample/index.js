const Koa=require('koa');

const app=new Koa();
// app.use((ctx,next)=>{
//     ctx.body=[
//         {
//             name:'sofiya'
//         }
//     ]
//     next();
//     // ctx.body.push({
//     //     name:'Jerry'
//     // })
// });
//
// app.use((ctx,next)=>{
//     ctx.body.push({
//         name:'tom'
//     });
//     next();
// });
//路由
// const router={};
// router['/html']=ctx=>{
//     ctx.type='text/html;charset=utf-8';
//     ctx.body=`<b>名字:${ctx.body[0].name}</b>`
// };
// app.use((ctx,next)=>{
//     //router[ctx.url](ctx);
//     // if(ctx.url==='/html') {
//     //     ctx.type='text/html;charset=utf-8';
//     //     ctx.body=`<b>名字:${ctx.body[0].name}</b>`
//     // }
// });

//常见中间件
app.use(require('koa-static')(__dirname+'/'));

const router=require('koa-router')();
router.get('/string',async (ctx,next)=>{
    ctx.body='string';
});

router.get('/json',(ctx,next)=>{
    ctx.body={
        name:'json'
    }
});
app.use(router.routes());
app.listen(3000);