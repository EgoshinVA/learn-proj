import styled from 'styled-components';
import {breakpoints} from "../../breakpoints.ts";

export const Footer = () => {
    return (
        <FooterStyle>
            <p>Some Company 2024</p>
        </FooterStyle>
    );
};

const FooterStyle = styled.footer`
    display: flex;
    align-items: center;
    padding: 30px 0;

    & p {
        font-size: 18px;
        font-weight: bold;
        margin: 0 auto;
    }

    @media (min-width: ${breakpoints.md}) {
        padding: 60px 0;

        & p {
            font-size: 24px;
        }
    }
`