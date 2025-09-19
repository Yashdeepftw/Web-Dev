import { Link, useNavigate } from "react-router-dom"
import { BlackBtn } from "../components/BlackBtn"
import { InputBtn } from "../components/InputBtn"
import { PassBtn } from "../components/PassBtn"
import { useState } from "react"
import { SignupInput } from '@yashdeepftw/medium-zod/dist/'
import { BACKEND_URL } from "../config"
import axios from "axios"

export const Signup = () => {
    const navigate = useNavigate();
    const [postInputs, setpostInputs] = useState<SignupInput>({
        name: '',
        email: '',
        password: ''
    })
    return (
        <div className="flex justify-center items-center h-screen w-screen relative">
            <div className="w-[600px] h-[570px] border-[#666666]/60 border-[1px] rounded-[32px]">
                <div className="flex flex-col items-center mt-[25px]">
                    <h2 className="font-[poppins] font-medium text-[28px] text-[#333333]">Create an Account</h2>
                    <p className="text-[16px] font-[poppins] font-extralight ">Alredy Have an Account?  
                        <Link to={'/signin'} className="cursor-pointer underline pl-1 ">Login</Link>
                    </p>
                    <div className="mt-[25px] flex flex-col gap-[20px]">
                    <InputBtn  type='email' label='Email' placeholder='Enter your Email' onChange={(e) => {
                            setpostInputs({
                                ...postInputs,
                                email: e.target.value
                            })
                    }}/>
                        <InputBtn type='text' label='Name' placeholder='Enter your Name' onChange={(e) => {
                            setpostInputs({
                                ...postInputs,
                                name: e.target.value
                            })
                        }} />
                    <PassBtn  label='Password' placeholder='Password' onChange={(e) => {
                        setpostInputs({
                            ...postInputs,
                            password: e.target.value
                        }
                        )
                    }}/>
                    <BlackBtn to="/blog" label='Sign Up' onClick={async (e) => {
                        e.preventDefault();
                        try {
                            const res = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, postInputs);
                            const jwt = res.data.jwt;
                            localStorage.setItem("Authorization", `Bearer ${jwt}`);
                            navigate('/blog')
                        }
                        catch(e) {
                            alert('failure')
                        }
                    }}/>
                    </div>
                </div>
            </div>
            <Link to={'/'}>
                <button className="absolute right-[50px] top-[70px] border p-2 px-[15px] bg-green-700 text-white border-green-700 rounded-lg hover:bg-green-800 focus:ring-green-200 focus:ring-4">Go to Home</button>
            </Link>
        </div>
    )
}