import React from 'react';
import {
  Container,
  Helper,
  Title,
  AppName,
  Image,
} from '../styles/HomeView.styles';
import defaultAvatar from 'images/pikachu.png';

export const HomeView = () => {

  return (
    <Container>
      <Helper>
        <Title>Welcome to</Title>
        <AppName>Pika
          <span role="img" aria-label="Icon-pika">
            ⚡
          </span>
        book</AppName>
        <Image src={defaultAvatar} alt="avatar" />
      </Helper>
    </Container>
  )
};