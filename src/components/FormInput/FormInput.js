import * as StIn from "./styles"

function FormInput({id, placeholder, type, name}) {   
    return (
        <StIn.WrapperInidivdual>
            <StIn.Label htmlFor={id}>{name}</StIn.Label>
             <StIn.IndividualInput  id={id} placeholder={placeholder} type={type}/>
        </StIn.WrapperInidivdual>
    );
}

export default FormInput;