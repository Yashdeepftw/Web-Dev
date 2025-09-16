import { Link } from "react-router-dom"

export const BlackBtn = (props: any) => {
    return (
        <Link to={props.to} className={` bg-black text-white rounded-[25px] px-[16px] py-[8px] flex justify-center items-center ${props.className}`}>
            {props.label}
        </Link>
    )
}