import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
    min-height: calc(100vh - 50px);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`

export const Text = styled.h1`
  margin-left: 10px;
  display: inline-block;
  text-decoration: none;

  font-weight: 700;
  font-size: 18px;
  color: #191970;
  text-transform: uppercase;
  text-shadow: 2px 2px 2px #4682B4;
  
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Link = styled(NavLink)`
  margin-left: 10px;
  display: inline-block;
  text-decoration: none;

  font-weight: 700;
  font-size: 28px;
  color: #191970;
  text-transform: uppercase;
  text-shadow: 2px 2px 10px yellow;
  
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;