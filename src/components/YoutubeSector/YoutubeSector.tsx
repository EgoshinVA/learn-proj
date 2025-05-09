import styled from "styled-components";
import {breakpoints} from "../../breakpoints.ts";
import YouTube from 'react-youtube';

export const YoutubeSector = () => {
    const videoId = "dQw4w9WgXcQ";

    const opts = {
        height: '290',
        width: '460',
        playerVars: {
            autoplay: 0,
            controls: 1,
            rel: 0,
        },
    };

    const onReady = (event: any) => {
        event.target.pauseVideo();
    };

    return (
        <YoutubeSectorStyle>
            <TextBlock>
                <h1>Most important title on the page</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum
                    ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante</p>
            </TextBlock>
            <YouTube
                videoId={videoId}
                opts={opts}
                onReady={onReady}
                onError={(e) => console.error('YouTube error:', e)}
            />
        </YoutubeSectorStyle>
    );
};

const YoutubeSectorStyle = styled.div`
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #f5f5f5;

    @media (min-width: ${breakpoints.md}) {
        padding: 30px 30px 70px;
        flex-direction: row;
        justify-content: space-between;
    }
`

const TextBlock = styled.div`
    width: 100%;

    & h1 {
        font-size: 32px;
        margin: 0 0 15px 0;
    }

    @media (min-width: ${breakpoints.md}) {
        width: 35%;

        & h1 {
            font-size: 48px;
        }
    }
`