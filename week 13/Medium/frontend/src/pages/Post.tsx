import axios from "axios"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config"
import { useState } from "react"

export const Post = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex  flex-col items-center gap-4"> 
                    <div className="h-[50px] w-full  border-b px-[100px] flex justify-between items-center">
                        <div className=" h-full w-[100px] flex items-center">
                            <Link to={'/'}><h1 className="font-[medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, Segoe-UI, Roboto, Oxygen, Ubuntu, Cantarell, Open-Sans, Helvetica-Neue, sans-serif] font-extrabold text-[24px] ">Medium</h1></Link>
                        </div>
                        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full light:bg-gray-600">
                            <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                        </div>
                    </div>
                <div className="max-w-screen-lg w-full gap-6 flex flex-col">
                    <div>
                        <label htmlFor="message" className="block mb-2 text-lg font-medium text-gray-900 ">Title</label>
                        <textarea id="message" rows={2} className="block p-2.5 w-full text-sm text-slate-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-slate-500 focus:border-slate-500 " placeholder="Write your thoughts here..." onChange={(e) => {
                            setTitle(e.target.value)
                        }}></textarea>
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-2 text-lg font-medium text-gray-900 ">Your message</label>
                        <textarea id="editor" rows={10} className="block p-2.5 w-full  text-sm text-gray-800 bg-gray-50 border-1  focus:ring-0 rounded-lg  border-gray-300" placeholder="Write an article..." required onChange={(e) => {
                            setContent(e.target.value)
                        }} ></textarea>
                    </div>
                    <div>
                        <button type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-green-200  hover:bg-green-800" onClick={ async () => {
                            const res = await axios.post(`${BACKEND_URL}/api/v1/blog/post`,{
                                title,
                                content
                            }, {
                                headers: {
                                    'Authorization': localStorage.getItem('Authorization')
                                }
                            })
                            navigate(`/get/${res.data.id}`);
                        }}>
                            Publish post
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}