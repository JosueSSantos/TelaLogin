import React from 'react';
import { Container, Title, Content } from './index.styles';

export default function Component({ title, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  );
}
