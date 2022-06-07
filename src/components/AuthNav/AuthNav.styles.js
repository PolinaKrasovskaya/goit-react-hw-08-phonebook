import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  margin-left: 20px;
  display: inline-block;
  text-decoration: none;

  font-weight: 700;
  font-size: 18px;
  color: #191970;
  text-shadow: 0 0 10px yellow;

  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.1);
    text-shadow: 0 0 10px yellow;
  }
  &.active {
    color: #F0E10D;
    text-shadow: 0 0 10px #191970;
  }
`;