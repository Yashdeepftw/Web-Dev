"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePostInput = exports.createPostInput = exports.signinInput = exports.signupInput = void 0;
const z = require("zod");
exports.signupInput = z.object({
    email: z.string().email(),
    password: z.string(),
    name: z.string().optional(),
});
exports.signinInput = z.object({
    email: z.string().email(),
    password: z.string(),
    name: z.string().optional()
});
exports.createPostInput = z.object({
    title: z.string(),
    content: z.string(),
});
exports.updatePostInput = z.object({
    title: z.string().optional(),
    content: z.string().optional(),
});
