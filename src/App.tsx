import styled from "styled-components";
import {Header} from "./components/Header/Header.tsx";
import {YoutubeSector} from "./components/YoutubeSector/YoutubeSector.tsx";
import {CardsSection} from "./components/CardsSection/CardsSection.tsx";
import {LastSection} from "./components/LastSection/LastSection.tsx";
import {Footer} from "./components/Footer/Footer.tsx";
import {breakpoints} from "./breakpoints.ts";
import {useState} from "react";
import {FormPage} from "./components/FormPage/FormPage.tsx";

function App() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <MainPage>
            <Header setIsFormOpen={setIsFormOpen}/>
            {isFormOpen ? <FormPage/> : <Main>
                <YoutubeSector/>
                <CardsSection setIsFormOpen={setIsFormOpen}/>
                <LastSection setIsFormOpen={setIsFormOpen}/>
            </Main>}
            <Footer/>
        </MainPage>
    )
}

const MainPage = styled.div`
    width: 90%;
    margin: 0 auto;

    @media (min-width: ${breakpoints.md}) {
        width: 80%;
    }

    @media (min-width: ${breakpoints.lg}) {
        width: 60%;
    }
`

const Main = styled.main`
    border-top: 1px gray solid;
    border-bottom: 1px gray solid;
`

export default App