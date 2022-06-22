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

const WrapperForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const TitleForm = styled.h1 `
    color:${colors.gray[900]};
    text-transform: capitalize;
    ${typography.head.md};
    font-weight: 600;
    text-transform: capitalize;
`;

export {Wrapper, WrapperForm, TitleForm};