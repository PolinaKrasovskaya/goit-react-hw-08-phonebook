import styled from '@emotion/styled';

export const Form = styled.form`
    max-width: 300;
`

export const Header = styled.h1`
    margin-top: 40px;
    text-transform: uppercase;

    font-size: 22px;
    font-weight: 700;
    color: #191970;
`

export const HeaderAccent = styled.span`
    text-shadow: 0 0 10px yellow;
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    font-weight: 500;
    font-size: 14px;
    color: #191970;
    text-shadow: 1px 1px 2px #4682B4;
    text-transform: uppercase;
`

export const Input = styled.input`
    margin-top: 5px;
    padding: 3px;
    max-width: 300px;

    font-size: 16px;
    color: #191970;

    border: 1px solid #191970;
    border-radius: 3px;

    outline: none;
`

export const Button = styled.button`
    margin-top: 10px;
    padding: 2px;
    width: 80px;
    box-shadow: 2px 2px 2px #4682B4;

    font-size: 16px;
    font-weight: 900;
    color: #191970;
    background-color: #F0E10D;

    border: 1px solid transparent;
    border-radius: 3px;
    
    transition: 400ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        background-color: #191970;
        color: #F0E10D;
`