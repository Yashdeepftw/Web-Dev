import { Link } from "react-router-dom"

interface PropsType {
    title: string,
    content: string,
    authorname: string,
    id: string
}
export const BlogCard = (props: PropsType) => {
    return (
        <div className="h-[200px] w-[50%]  mt-[30px] flex flex-col gap-3 border-b border-slate-300">
            <div className="flex justify-start items-center gap-2.5 pb-1.5 ">
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full light:bg-gray-600">
                    <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                </div>
                <p>&#9679;</p>
                <div className="font-[poppins] font-medium text-[25px] text-[#333333]">
                    {props.authorname}
                </div>
            </div>
            <div className="font-[poppins] font-[400] text-[20px] text-[#303030]">
                <Link to={`/get/${props.id}`}>{props.title}</Link>
            </div>
            <div className="font-[poppins] font-medium text-[15px] text-[#545353]">
                {props.content.slice(0, 100) + "...."}
            </div>
        </div>
    )
}