import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt';


const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>();

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
    console.log(e);
    return c.json({error: 'error while signup'});
  }
});

app.post('/api/v1/signin', (c) => {
  return c.json({
    msg: 'signin page'
  })
});

app.post('/api/v1/blog', (c) => {
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
