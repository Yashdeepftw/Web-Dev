import { Hono } from 'hono'
import { verify } from 'hono/jwt';
import { userRouter } from '../routes/user';
import { blogRouter } from '../routes/blog';
import { cors } from 'hono/cors'


const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  Variables: {
    userId: string
  }
}>();

// Middlewares
app.use('/api/*', cors());
app.use("/api/v1/blog/*", async (c, next) => {
  try{
    const jwt = c.req.header("Authorization");
    if(!jwt) {
      c.status(401);
      return c.json({error: 'unauthorized'});
    }
    const token = jwt.split(' ')[1];
    const payload = await verify(token, c.env.JWT_SECRET);
    if(!payload) {
      c.status(401);
      return c.json({ error: 'unauthorized'});
    }
    c.set('userId', payload.id as string);
  }
  catch (e) {
    c.status(403);
    return c.json({ error: 'unauthorized'})
  }
  await next()
})  

// Routes
app.route('/api/v1/user', userRouter);
app.route('/api/v1/blog', blogRouter)






export default app
