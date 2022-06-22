import styled from "@emotion/styled";
import { colors, typography } from "../../styles";

const Link = styled.a`
    color: ${colors.pink[500]};
    cursor: pointer;
    ${typography.text.md}
    text-transform: capitalize;

`;

function LinkTo({ children }) {
    return (
        <Link>{children}</Link>
    );
}

export default LinkTo;