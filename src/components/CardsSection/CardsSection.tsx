import {Button} from "../Button/Button.tsx";
import styled from "styled-components";
import {breakpoints} from "../../breakpoints.ts";

type Props = {
    setIsFormOpen: (value: boolean) => void
}

export const CardsSection = ({setIsFormOpen}: Props) => {
    return (
        <Section>
            <Title>Also very important title</Title>
            <Cards>
                {new Array(6).fill(0).map((_, i) => (
                    <Card key={i}>
                        <h3>Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et
                            condimentum</p>
                    </Card>
                ))}
            </Cards>
            <Button onClick={() => setIsFormOpen(true)}>Contact us</Button>
        </Section>
    );
};

const Title = styled.h2`
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    margin: 0 0 20px 0;

    @media (min-width: ${breakpoints.md}) {
        font-size: 48px;
    }
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 15px;

    @media (min-width: ${breakpoints.md}) {
        padding: 20px 30px;
    }
`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Card = styled.div`
    width: 100%;
    padding: 15px;
    box-sizing: border-box;

    & h3 {
        font-size: 20px;
        margin: 0 0 10px 0;
    }

    & p {
        color: gray;
        margin: 0;
    }

    @media (min-width: ${breakpoints.sm}) {
        width: 50%;
    }

    @media (min-width: ${breakpoints.lg}) {
        width: 33.33%;
        padding: 0 50px 50px 0;
    }
`