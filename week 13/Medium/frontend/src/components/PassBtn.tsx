export const PassBtn = (props: any) => {
    return (
        <div className="h-[140px] w-full  ">
            <p className="font-[poppins] font-extralight text-[16px]">{props.label}</p>
            <input type="password" className="border-[1px] border-[#666666] rounded-[10px] w-full h-[56px] placeholder:text-[#333333]/50 " placeholder={props.placeholder } />
            <div className="h-[74px] w-full flex justify-between pt-[15px]">
                <div className="">
                    <ul className=" px-[20px] list-disc font-[poppins] font-extralight text-[15px]">
                        <li>Use 8 or more characters</li>
                        <li>Use upper and lower case latters</li>
                    </ul>
                </div>
                <div>
                    <ul className=" px-[20px] list-disc font-[poppins] font-extralight text-[15px]">
                        <li>Use a number </li>
                        <li>Use a symbol</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}