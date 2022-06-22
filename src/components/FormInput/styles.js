import styled from "@emotion/styled";
import { colors, typography } from "../../styles";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 16px;
    gap: 32px;
    width: 768px;
    margin: 96px auto;
    align-items:center;
`;

const WrapperInidivdual= styled.div `
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const Label = styled.p `
    color: ${colors.gray[500]};
    ${typography.text.xs}
    font-weight: 400;
    font-family: 'Inter';
    font-style: normal;
    letter-spacing: 0.125em;
    text-transform: uppercase;
`;

const TitleForm = styled.h1 `
    color:${colors.gray[900]};
    text-transform: capitalize;
    ${typography.head.md};
    font-weight: 600;
`;

const WrapperForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const IndividualInput = styled.input `
    outline: none;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 6px;
    width: 320px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 12px;
    border: 1px solid ${colors.gray[200]};
    color: ${colors.gray[400]};

`;

function GeneralInput({id, placeholder, type, name}) {   
    return (
        <WrapperInidivdual>
            <Label htmlFor={id}>{name}</Label>
             <IndividualInput  id={id} placeholder={placeholder} type={type}/>
        </WrapperInidivdual>
    );
}

export {
    Wrapper,
     TitleForm, 
     GeneralInput,
     Label,
     IndividualInput,
     WrapperForm, 
     WrapperInidivdual
    };