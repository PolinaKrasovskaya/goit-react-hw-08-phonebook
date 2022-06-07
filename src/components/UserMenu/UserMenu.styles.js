import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

export const Image = styled.img`
  width: 30px;
`;

export const Text = styled.p`
  margin-left: 10px;

  font-weight: 700;
  font-size: 18px;
  color: #191970;
  text-transform: uppercase;
`;

export const Name = styled.span`
  text-shadow: 0 0 10px yellow;
`;

export const Button = styled.button`
  margin-left: 10px;
  padding: 2px;
  width: 90px;

  font-size: 16px;
  font-weight: 900;
  color: #191970;
  background-color: #F0E10D;
  text-transform: uppercase;

  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: 2px 2px 2px #4682B4;
  
  transition: 400ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #191970;
    color: #F0E10D;
`