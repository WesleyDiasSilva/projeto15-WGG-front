import React from 'react'
import styled from 'styled-components'

export default function BackgroundImg({ children }) {
    return (
            <BgImg>
                {children}
            </BgImg>
    )
}

const BgImg = styled.div`
    background-image: url(https://wallpapercave.com/wp/wp6736053.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
    position: absolute;
`