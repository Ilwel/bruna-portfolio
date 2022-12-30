import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: var(--text-20);
  border-radius: 1rem;
  padding-left: 2.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--red);
  gap: 0.5rem;
  .year-sub{
    font-style: italic;
    font-size: 1.3rem;
    opacity: 0.7;
  }
  .description{
    font-size: 1.1rem;
    color:var(--text)
  }
`

type CardProps = {
  children: React.ReactNode
}

const Card = (props: CardProps) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
};

export default Card;