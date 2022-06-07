import styled from '@emotion/styled';

export const ItemList = styled.li`
    display: flex;
    justify-content: space-between;
    margin-top: 5px;

    color: #191970
`

export const ItemButton = styled.button`
    padding: 2px;
    width: 70px;

    border: 1px solid #191970;
    border-radius: 3px;
    box-shadow: 2px 2px 2px #4682B4;

    font-size: 14px;
    font-weight: 900;
    color: #191970;
    background-color: #F0E10D;

    transition: 400ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        background-color: #191970;
        color: #F0E10D;
`

export const Name = styled.span`
    text-transform: uppercase;
    font-weight: 700;
        text-shadow: 1px 1px 2px #4682B4;
`