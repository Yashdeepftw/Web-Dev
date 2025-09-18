import { BlogCard } from "../components/Blogcard"
import { useBlogs } from "../hooks/useBlogs"

export const  Blog = () => {
    const { loading, blogs } = useBlogs();

    if(loading) {
        return (
            <div>
                Loading....
            </div>
        )
    }
    return <div className="h-screen w-screen bg-[#f7f4ed] flex flex-col items-center overflow-auto">
        <div className="h-[50px] w-full  border-b px-[100px] flex justify-between items-center">
            <div className=" h-full w-[100px] flex items-center">
                <h1 className="font-[medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, Segoe-UI, Roboto, Oxygen, Ubuntu, Cantarell, Open-Sans, Helvetica-Neue, sans-serif] font-extrabold text-[24px] ">Medium</h1>
            </div>
            <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full light:bg-gray-600">
                <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            </div>
        </div>
        {blogs.map( blog => <BlogCard authorname={blog.author.name} title={blog.title} content={blog.content} key={blog.id} />)}
    </div>
}