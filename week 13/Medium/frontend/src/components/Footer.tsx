import { Link } from "react-router-dom"

export const Footer = (props: any) => {
    return (
        <div className="h-[55px] w-screen mt-[5px] border-t  flex justify-center">
            <div className=" h-[55px] flex w-[680px] justify-center items-center gap-[15px] font-[sohne, Helvetica Neue, Helvetica, Arial, sans-serif] text-[15px] leading-[20px] font-[400] text-[#6b6b6b]">
                <Link to={props.to}>Help</Link>
                <Link to={props.to}>Status</Link>
                <Link to={props.to}>About</Link>
                <Link to={props.to}>Careers</Link>
                <Link to={props.to}>Press</Link>
                <Link to={props.to}>Blog</Link>
                <Link to={props.to}>Privacy</Link>
                <Link to={props.to}>Rules</Link>
                <Link to={props.to}>Terms</Link>
                <Link to={props.to}>Text to speech</Link>
            </div>
        </div>
    )
}