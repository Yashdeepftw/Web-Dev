import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

interface Blogs {
    id: string;
    title: string,
    content: string,
    author: {
        name: string
    }
}
export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setblogs] = useState<Blogs[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                'Authorization': localStorage.getItem('Authorization')
            }
        })
            .then( res => {
                setblogs(res.data.blogs ?? []);
                setLoading(false);
            })
    }, [])

    return {
        loading,
        blogs
    }
}