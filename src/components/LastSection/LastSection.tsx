import {Button} from "../Button/Button.tsx";
import styled from "styled-components";
import {breakpoints} from "../../breakpoints.ts";

type Props = {
    setIsFormOpen: (value: boolean) => void
}

export const LastSection = ({setIsFormOpen}: Props) => {
    return (
        <LastSectionStyle>
            <Title>Less important title</Title>
            <Button onClick={() => setIsFormOpen(true)}>Contact us</Button>
        </LastSectionStyle>
    );
};

const LastSectionStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 15px;
    background-color: #f5f5f5;

    @media (min-width: ${breakpoints.md}) {
        padding: 40px 0;
    }
`

const Title = styled.h2`
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    margin: 0 0 20px 0;

    @media (min-width: ${breakpoints.md}) {
        font-size: 48px;
    }
`