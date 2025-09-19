import { Link } from "react-router-dom";
import { BlogCard } from "../components/Blogcard"
import { useBlogs } from "../hooks/useBlogs"

export const  Blog = () => {
    const { loading, blogs } = useBlogs();

    if(loading) {
        return (
            <div className="bg-[#f7f4ed] h-screen w-screen flex justify-center items-center text-4xl">
                Loading....
            </div>
        )
    }
    return <div className="h-screen w-screen bg-[#f7f4ed] flex flex-col items-center overflow-auto relative">
        <div className="h-[50px] w-full  border-b px-[100px] flex justify-between items-center">
            <div className=" h-full w-[100px] flex items-center">
                <Link to={'/'}><h1 className="font-[medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, Segoe-UI, Roboto, Oxygen, Ubuntu, Cantarell, Open-Sans, Helvetica-Neue, sans-serif] font-extrabold text-[24px] ">Medium</h1></Link>
            </div>
            <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full light:bg-gray-600">
                <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            </div>
        </div>
        <h1 className="text-4xl uppercase font-[poppins] font-medium mt-5">
            All Blogs
        </h1>  
        {blogs.map( blog => <BlogCard authorname={blog.author.name || "Anonymous"} title={blog.title} content={blog.content} key={blog.id} id={blog.id} />)}
        <Link to={'/post'} className="absolute right-[50px] top-[60px] text-sm  font-medium bg-green-700 rounded-lg p-2 px-4 text-white focus:ring-4 focus:ring-green-200  hover:bg-green-800">Post a blog</Link>
        <Link to={'/'} className="absolute right-[50px] top-[120px] text-sm  font-medium bg-red-700 rounded-lg p-2 px-4 text-white focus:ring-4 focus:ring-red-200  hover:bg-red-800" onClick={() => {
            localStorage.removeItem('Authorization')
        }}>Log Out</Link>
    </div>
}