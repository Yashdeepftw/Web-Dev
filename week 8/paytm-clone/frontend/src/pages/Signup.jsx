import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export const Signup = () => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    return <div className="bg-slate-300 pt-12 h-screen flex justify-center">
        <div className="flex flex-cols justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={'Sign up'} />
                <SubHeading label={'Enter your infomation to create an account'} />
                <InputBox onChange={e => {
                    setfirstName(e.target.value);
                }} placeholder="John" label={"First Name"} /> 
                <InputBox onChange={e => {
                    setlastName(e.target.value);
                }} placeholder='Doe' label={'Last Name'} /> 
                <InputBox onChange={e => {
                    setusername(e.target.value);
                }} placeholder='example@gmail.com' label={"Email"} /> 
                <InputBox onChange={e => {
                    setpassword(e.target.value);
                }} placeholder='12345' label={'Password'} />
                <div className="pt-4">
                    <Button onClick={ async () => {
                      const res = await axios.post('http://localhost:3000/api/v1/user/signup', {
                        username,
                        firstName,
                        lastName,
                        password
                      });
                      localStorage.setItem("token", res.data.token);
                      navigate('/dashboard');
                    }} label={'Sign Up'} /> 
                </div> 
                <BottomWarning label={'Already have an account?'} buttonText={'Sing in'} to={'/signin'} />
            </div>
        </div>
    </div>
}