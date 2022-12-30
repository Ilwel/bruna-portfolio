import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 20rem;
  width: 20rem;
  background-color: var(--crust-70);
  border: solid 0.05rem var(--text);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img{
    width: 8rem;
    height: 12rem;
  }
  p{
  }
  transition: 1s;
  opacity: 0.5;
  :hover{
    transform: scale(1.1);
    opacity: 1;
  }
`
type NavOptionProps = {
  children: React.ReactNode
}

const NavOption = (props: NavOptionProps) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
};

export default NavOption;