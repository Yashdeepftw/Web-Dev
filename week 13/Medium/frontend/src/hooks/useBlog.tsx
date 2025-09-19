import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import { useParams } from "react-router-dom";

interface Post {
    id: string,
    title: string,
    content: string,
    author: {
        name: string
    }
}
export const useBlog = () => {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState<Post>();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                'Authorization': localStorage.getItem('Authorization')
            }
        })
            .then( res => {
                setPost(res.data.posts);
                setLoading(false);

            })

    }, [id])

    return {
        loading,
        post
    }
}