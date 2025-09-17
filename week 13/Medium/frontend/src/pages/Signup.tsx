import { Link } from "react-router-dom"
import { BlackBtn } from "../components/BlackBtn"
import { InputBtn } from "../components/InputBtn"
import { PassBtn } from "../components/PassBtn"

export const Signup = () => {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <div className="w-[600px] h-[570px] border-[#666666]/60 border-[1px] rounded-[32px]">
                <div className="flex flex-col items-center mt-[25px]">
                    <h2 className="font-[poppins] font-medium text-[28px] text-[#333333]">Create an Account</h2>
                    <p className="text-[16px] font-[poppins] font-extralight ">Alredy Have an Account?  
                        <Link to={'/signin'} className="cursor-pointer underline pl-1 ">Login</Link>
                    </p>
                    <div className="mt-[25px] flex flex-col gap-[20px]">
                    <InputBtn type='email' label='Email' placeholder='Enter your Email'/>
                        <InputBtn type='email' label='Name' placeholder='Enter your Name' />
                        <PassBtn  label='Password' placeholder='Password' />
                    <BlackBtn label='Sign Up' />
                    </div>
                </div>
            </div>
        </div>
    )
}