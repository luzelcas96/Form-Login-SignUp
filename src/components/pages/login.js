import styled from "@emotion/styled";
import Button from "../Button";
import FormInput from "../FormInput";
import { colors, typography } from "../../styles";
import { TitleForm, Wrapper, WrapperForm } from "./styles";

const newButton = {
    width:"100%", 
    backgroundColor: colors.primary[300],
    color: colors.white,
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing:"0.1em",
    textTransform: "Uppercase"
}

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