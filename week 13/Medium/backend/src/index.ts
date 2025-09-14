import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt';
import userRouter from '../routes/user';


const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  Variables: {
    userId: string
  }
}>();

// Routes
app.route('/api/v1/user', userRouter);

// Middlewares

app.use("/api/v1/blog/*", async (c, next) => {
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
  await next()
})  

app.get('/api/v1/blog/:id', (c) => {
  const id = c.req.param('id');
  console.log(id);
  return c.text('Hello Hono!')
})

app.post('/api/v1/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    })
  
    const jwt = await sign({id: user.id}, c.env.JWT_SECRET);

    return c.json({
      msg: 'signup page',
      jwt
    });
  }
  catch(e) {
    c.status(403);
    return c.json({error: 'error while signup'});
  }
});

app.post('/api/v1/signin', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();
  
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email
      }
    });

    if(!user) {
      c.status(403);
      return c.json({ error: 'user not found'});
    }

    const jwt = await sign({id: user.id}, c.env.JWT_SECRET);

    return c.json({
      msg: 'signin is successful',
      jwt
    })
  }
  catch (e) {
    c.status(403);
    return c.json({error: 'error while signin'});
  }
});

app.post('/api/v1/blog', (c) => {
  console.log(c.get('userId'));
  return c.json({
    msg: 'blog page'
  })
});

app.put('/api/v1/blog', (c) => {
  return c.json({
    msg: 'blog put page'
  })
});


export default app
