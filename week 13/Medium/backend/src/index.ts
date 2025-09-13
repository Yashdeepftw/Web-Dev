import { Hono } from 'hono'

const app = new Hono()

app.get('/api/v1/blog/:id', (c) => {
  const id = c.req.param('id');
  console.log(id);
  return c.text('Hello Hono!')
})

app.post('/api/v1/signup', (c) => {
  return c.json({
    msg: 'signup page'
  })
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
