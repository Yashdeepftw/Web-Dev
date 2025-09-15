import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { createPostInput, updatePostInput } from "@yashdeepftw/medium-zod/dist";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: string
    }
}>();

blogRouter.get('/:id', async (c) => {
    // const id = c.req.param('id');
    const id = c.get('userId')
    console.log(id)
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try {
        const posts = await prisma.post.findMany({
            where: {
                authorId: id
            }
        })
        if(!posts) {
            return c.json({
                msg: 'no posts available'
            })
        }
        return c.json({
            msg: 'posts are',
            posts
        })
    }
    catch(e) {
        console.log(e)
        c.status(401);
        return c.json({
            msg: "error in finding posts"
        })
    }
})



blogRouter.post('/post',  async (c) => {
    const userId = c.get('userId')
    console.log(userId);
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const { success } = createPostInput.safeParse(body);
        if(!success) {
            c.status(400);
            return c.json({ error: 'Invalid Inputs'});  
        }

    try {
        const post = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                published: body.published,
                authorId: userId
            }
        });
        return c.json({
            msg: 'post created successful',
            id: post.id
        })
    }
    catch (e) {
        c.status(403);
        console.log(e);
        return c.json({
            msg: 'error in post creation'
        })
    }
});

blogRouter.put('/update', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const { success } = updatePostInput.safeParse(body);
        if(!success) {
            c.status(400);
            return c.json({ error: 'Invalid Inputs'});  
        }
    const id = c.get('userId');

    try {
        const post = await prisma.post.update({
            where: {
                id: body.id,
                authorId: id,
            },
            data: {
                content: body.content,
                title: body.title
            }
        })
        return c.json({
            msg: 'post updated'
        })
    }
    catch(e) {
        c.status(401);
        return c.json({
            msg: 'error in updating the post'
        })
    }
});