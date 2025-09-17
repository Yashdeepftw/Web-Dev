import { Link, useNavigate } from "react-router-dom"
import { InputBtn } from "../components/InputBtn"
import { BlackBtn } from "../components/BlackBtn"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { SigninInput } from "@yashdeepftw/medium-zod/dist"

export const Signin = () => {
    const navigate = useNavigate();
    const [inputs, setinputs] = useState<SigninInput>({
        email: "",
        password: ""
    })
    return (
        <div className="flex justify-center items-center h-screen w-screen">
        
            <div className="w-[600px] h-[470px] border-[#666666]/60 border-[1px] rounded-[32px]">
                <div className="flex flex-col items-center mt-[25px]">
                    <h2 className="font-[poppins] font-medium text-[28px] text-[#333333]">Signin an Account</h2>
                    <p className="text-[16px] font-[poppins] font-extralight "> no Account ?
                        <Link to={'/signup'} className="cursor-pointer underline pl-1 ">SignUp</Link>
                    </p>
                    <div className="mt-[25px] flex flex-col gap-[20px]">
                        <InputBtn type='email' label='Email' placeholder='Enter your Email' onChange={(e) => {
                            setinputs({
                                ...inputs,
                                email: e.target.value
                            })
                        }} />
                        <InputBtn type='password' label='Password' placeholder='Password' onChange={(e) => {
                            setinputs({
                                ...inputs,
                                password: e.target.value
                            })
                        }}/>
                        <BlackBtn to={'/signin'} label='Login' onClick={async (e) => {
                            e.preventDefault();
                            try {
                                const res = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, inputs);
                                const jwt = res.data.jwt;
                                localStorage.setItem("Authorization", `Bearer ${jwt}`);
                                navigate('/blog')
                            }
                            catch (e) {
                                alert("Unauthorized");
                                console.log(e);
                            }
                        }} />
                    </div>
                </div>
            </div>
        </div>
    )
}