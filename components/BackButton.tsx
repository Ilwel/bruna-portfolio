import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import backIcon from '../public/icons/back.svg'

const Container = styled.div`

  border-radius: 50%;
  height: 6rem;
  width: 6rem;
  background-color: var(--surface-1-70);
  position: absolute;
  top: 5rem;
  left: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.5s;
  :hover{
    transform: scale(1.1);
  }
  img{
    height: 2rem;
    margin-right: 0.5rem;
  }

`

const BackButton = () => {
  const router = useRouter()
  const onClick = () => {
    router.back()
  }
  return (
    <Container onClick={onClick}>
      <Image src={backIcon} alt='back icon' />
    </Container>
  );
};

export default BackButton;