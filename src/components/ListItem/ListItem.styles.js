import styled from '@emotion/styled';

export const ItemList = styled.li`
    display: flex;
    justify-content: space-between;
    margin-top: 5px;

    color: #191970
`

export const ItemButton = styled.button`
    width: 60px;

    border: 1px solid transparent;
    border-radius: 3px;
    box-shadow: 2px 2px 2px #4682B4;

    font-size: 12px;
    font-weight: 700;
    color: #191970;
    background-color: #F0E10D;
    text-transform: uppercase;

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