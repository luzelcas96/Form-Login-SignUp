import Button from "../Button";
import FormInput from "../FormInput";
import { newButton, TitleForm, Wrapper, WrapperForm } from "./styles";

function Login() {
    return (
        <Wrapper>
            <TitleForm>login</TitleForm>
             <WrapperForm>
                <FormInput type = "email" name= "Email" id= "email" placeholder="example@mail.com"/>
                <FormInput type = "password" name= "Password" id="password" placeholder="*********"/>
                <Button style={newButton} children="LOGIN" />
             </WrapperForm>
        </Wrapper>
    );
}

export default Login;