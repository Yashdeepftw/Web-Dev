import { Link } from "react-router-dom";
import { BlackBtn } from "./BlackBtn";

export default function Quotes() {
    return (
        <div className="w-screen h-[75px] border-b flex items-center justify-center">
            <div className=" h-fit w-screen mx-[164px] flex justify-between items-center">
                <h1 className="font-[medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, Segoe-UI, Roboto, Oxygen, Ubuntu, Cantarell, Open-Sans, Helvetica-Neue, sans-serif] font-extrabold text-[24px] ">Medium</h1>
                <div className=" mr-[20px] flex justify-between items-center h-[40px] w-[200px] ">
                    <Link to={"/signin"} className="font-[sohne] text-[17px] font-medium pointer-none: leading-[20px]">Sign in</Link>
                    <BlackBtn to={'/Signup'} label="Get Started" />
                </div>
            </div>
        </div>
    )
}