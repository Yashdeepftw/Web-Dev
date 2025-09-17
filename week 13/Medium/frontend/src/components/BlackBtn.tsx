import { MouseEvent } from "react"
import { Link } from "react-router-dom"

interface PropsTypes {
    to: string,
    className?: string,
    label: string,
    onClick?: (e: MouseEvent<Element>) => void
}
export const BlackBtn = (props: PropsTypes) => {
    return (
        <Link to={props.to} className={` bg-black text-white rounded-[25px] px-[16px] py-[8px] flex justify-center items-center ${props.className}`} onClick={props.onClick}>
            {props.label}
        </Link>
    )
}