import { Link } from "react-router-dom";
import { useBlog } from "../hooks/useBlog"

export const GetPost = () => {
    const {loading, post } = useBlog();

    if(loading) {
        return (
            <div className="bg-[#f7f4ed] h-screen w-screen flex justify-center items-center text-4xl">
                Loading....
            </div>
        )
    }
    return (
        <div className="h-screen w-screen bg-[#f7f4ed] flex flex-col items-center overflow-auto gap-10">
            <div className="h-[50px] w-full  border-b px-[100px] flex justify-between items-center">
                <div className=" h-full w-[100px] flex items-center">
                    <Link to={'/'}>
                        <h1 className="font-[medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, Segoe-UI, Roboto, Oxygen, Ubuntu, Cantarell, Open-Sans, Helvetica-Neue, sans-serif] font-extrabold text-[24px] ">Medium</h1>
                    </Link>
                    
                </div>
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full light:bg-gray-600">
                    <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                </div>
            </div>
            <div className=" h-fit w-[1000px] break-words ">
                <div className="h-full w-full  mt-[30px] flex flex-col gap-3 items-center ">
                    <div className="flex justify-start items-center gap-2.5 pb-1.5 ">
                        <div className="relative w-20 h-20 overflow-hidden bg-gray-100 rounded-full light:bg-gray-600">
                            <svg className="absolute w-24 h-24 text-gray-400 -left-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                        </div>
                        <p>&#9679;</p>
                        <div className="font-[poppins] font-medium text-[40px] text-[#333333]">
                            {post?.author.name}
                        </div>
                    </div>
                    <div className="font-[poppins] font-[400] text-[50px] text-[#303030]">
                        {post?.title}
                    </div>
                    <div className="font-[poppins] font-medium text-[25px] text-[#545353] ">
                        {post?.content} 
                    </div>
                </div>
            </div>
        </div>
    )
}