import { BlackBtn } from "./BlackBtn"

export const MainContent = () => {
    return (
        <div className="flex">
            <div className="h-[500px] w-screen  mt-[50px]  flex justify-between">
                <div className="h-fit w-[860px]  ml-[64px] pt-[50px]">
                    <h1 className="font-[gt-super] text-[120px] leading-[100px]  ">Human <br /> stories & ideas</h1>
                    <p className="font-[shone, Helvetica Neue, Arial] text-[22px] leading-[28px] font-[400] pt-[50px]">A place to read, write, and deepen your understanding</p>
                    <div className="w-[154px] pt-[50px]">
                        <BlackBtn label='Start reading' className=" text-[20px] pr-[20px] pl-[20px] w-[154px] font-[400] leading-[28px] " />
                    </div>
                </div>
            </div>
            <img src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png" alt="bg-image" className="h-[500px] w-[440px] z-0" />
        </div>
    )
}