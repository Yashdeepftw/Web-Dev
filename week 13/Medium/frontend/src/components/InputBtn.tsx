import { ChangeEvent } from "react"

interface PropsTypes {
    label: string,
    placeholder: string,
    type: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
export const InputBtn = (props: PropsTypes) => {
    return (
        <div className={`h-[87px] w-[549px] `}>
            <p className="font-[poppins] font-extralight text-[16px]">{props.label}</p>
            <input onChange={props.onChange}type={props.type} placeholder={props.placeholder} className="border-[1px] border-[#666666] rounded-[10px] w-full h-[56px] placeholder:text-[#333333]/50  " />
        </div>
    )
}