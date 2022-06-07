import styled from '@emotion/styled';

export const FormWrapper = styled.form`
    width: 350px;
    padding: 10px;

    display: inline-flex;
    flex-direction: column;
    align-items: center;

    border-radius: 3px;
    border: 2px solid #191970;
    background-color: #EFE55D;
`

export const InputLabel = styled.label`
    margin-top: 5px;
    width: 300;

    font-size: 14px;
    font-weight: 700;
    color: #191970;
    text-transform: uppercase;
`

export const FormInput = styled.input`
    margin-top: 5px;
    width: 300px;
    padding: 5px;

    border: 1px solid #191970;
    border-radius: 3px;

    color: #191970;
    outline: none;
`

export const SubmitButton = styled.button`
    margin-top: 15px;
    padding: 2px;
    max-width: 100px;
    
    border: 1px solid #191970;
    border-radius: 3px;
    box-shadow: 2px 2px 2px #4682B4;

    font-size: 14px;
    font-weight: 900;
    color: #F0E10D;
    background-color: #191970;

    transition: 400ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        background-color: #F0E10D;
        color: #191970;
    }
`