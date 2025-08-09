import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"

export const Signup = () => {
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-cols justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={'Sign up'} />
                <SubHeading label={'Enter your infomation to create an account'} />
                <InputBox placeholder="John" label={"First Name"} /> 
                <InputBox placeholder='Doe' label={'Last Name'} /> 
                <InputBox placeholder='example@gmail.com' label={"Email"} /> 
                <InputBox placeholder='12345' label={'Password'} />
                <div className="pt-4">
                    <Button label={'Sign Up'} /> 
                </div> 
                <BottomWarning label={'Already have an account?'} buttonText={'Sing in'} to={'/signin'} />
            </div>
        </div>
    </div>
}