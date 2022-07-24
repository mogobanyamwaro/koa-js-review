const Koa = require("koa");
const json = require("koa-json");
const KoaRouter = require("koa-router");

const app = new Koa();
const router = new KoaRouter();
app.use(json());
// app.use(async (ctx) => {
//   ctx.body = { msg: "hello world" };
// });

router.get("/test", (ctx) => (ctx.body = { msg: "test" }));

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => console.log("server is running at port 3000"));
