import styled from '@emotion/styled';

export const Container = styled.div`
    min-height: calc(100vh - 50px);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`

export const Helper = styled.div`
    align-items: center;
    justify-content: center;
    text-align: center;
`

export const Title = styled.p`
    margin: 0;
    text-transform: uppercase;

    font-size: 28px;
    font-weight: 900;
    color: #191970;
`

export const AppName = styled.p`
    margin: 0;
    text-transform: uppercase;

    font-size: 42px;
    font-weight: 900;
    color: #191970;
    text-shadow: 0 0 30px yellow;
`

export const Image = styled.img`
    margin-top: 20px;
    max-height: 200px;
`