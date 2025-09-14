import { Hono } from "hono";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: string
    }
}>();

blogRouter.get('/api/v1/blog/:id', (c) => {
    const id = c.req.param('id');
    console.log(id);
    return c.text('Hello Hono!')
})



blogRouter.post('/post',  async (c) => {
    
    return c.json({
        msg: 'blog page'
    })
});

blogRouter.put('/api/v1/blog', (c) => {
    return c.json({
        msg: 'blog put page'
    })
});