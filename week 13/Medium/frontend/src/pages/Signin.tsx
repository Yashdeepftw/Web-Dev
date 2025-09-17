import { Link } from "react-router-dom"
import { InputBtn } from "../components/InputBtn"
import { BlackBtn } from "../components/BlackBtn"

// import { SigninInput } from '../../node_modules/@yashdeepftw/medium-zod'
export const Signin = () => {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <div className="w-[600px] h-[470px] border-[#666666]/60 border-[1px] rounded-[32px]">
                <div className="flex flex-col items-center mt-[25px]">
                    <h2 className="font-[poppins] font-medium text-[28px] text-[#333333]">Signin an Account</h2>
                    <p className="text-[16px] font-[poppins] font-extralight "> no Account ?
                        <Link to={'/signup'} className="cursor-pointer underline pl-1 ">SignUp</Link>
                    </p>
                    <div className="mt-[25px] flex flex-col gap-[20px]">
                        <InputBtn type='email' label='Email' placeholder='Enter your Email' />
                        <InputBtn type='password' label='Password' placeholder='Password' />
                        <BlackBtn label='Login' />
                    </div>
                </div>
            </div>
        </div>
    )
}