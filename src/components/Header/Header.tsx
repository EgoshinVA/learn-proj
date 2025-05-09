import styled from "styled-components";
import {Button} from "../Button/Button.tsx";
import {breakpoints} from "../../breakpoints.ts";

type Props = {
    setIsFormOpen: (value: boolean) => void
}

export const Header = ({setIsFormOpen}: Props) => {
    return (
        <HeaderStyle>
            <p>Some Company</p>
            <Button onClick={() => setIsFormOpen(true)}>Contact us</Button>
        </HeaderStyle>
    );
};

const HeaderStyle = styled.header`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 30px 35px;
    align-items: center;

    & p {
        font-size: 20px;
        font-weight: bold;
        margin: 0;
    }

    @media (min-width: ${breakpoints.sm}) {
        flex-direction: row;
        justify-content: space-between;

        & p {
            font-size: 24px;
        }
    }
`