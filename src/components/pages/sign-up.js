import FormInput from "../FormInput";
import Button from "../Button";
import { newButton, TitleForm, Wrapper, WrapperForm } from "./styles";
import LinkTo from "../link/link";

function SignUp() {
    return (
        <Wrapper>
        <TitleForm>Sign Up</TitleForm>
         <WrapperForm>
            <FormInput type = "email" name= "Email" id= "email" placeholder="example@mail.com"/>
            <FormInput type = "password" name= "Password" id="password" placeholder="*********"/>
            <FormInput type = "text" name= "FIRTS NMAE" id="first-name" placeholder="John"/>
            <FormInput type = "text" name= "LAST NAME" id="last-name" placeholder="Doe"/>
            <FormInput type = "number" name= "phone" id="phone" placeholder="+51 987654321"/>
            <Button style={newButton} children="LOGIN" />
         </WrapperForm>
         <LinkTo>login</LinkTo>
    </Wrapper>
    );
}

export default SignUp;