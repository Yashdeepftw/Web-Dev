import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"

export const Signup = () => {
    return <div>
        <div>
            <Heading />
            <SubHeading />
            <InputBox /> 
            <InputBox /> 
            <InputBox /> 
            <InputBox /> 
            <Button /> 
            <BottomWarning />
        </div>
    </div>
}