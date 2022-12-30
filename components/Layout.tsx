import Image from 'next/image';
import React from 'react';
import styled from 'styled-components'
import myLoveImg from '../public/imgs/bruna.png'

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 750px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .main-img{
    position: absolute;
    height: 70rem;
    width: auto;
    top: 1rem;
    @media only screen and (max-width: 750px){
      height: 20rem;
      width: 20rem;
      position: static;
      margin-top: 3rem;
    }
  }

  .content{
    width: 100%;
    height: 100%;
    position: absolute;
  }

`

type layoutProps = {
  children: React.ReactNode
}

const Layout = (props: layoutProps) => {
  return (
    <Container>
      <Image className='main-img' src={myLoveImg} alt="bruna imagem" />
      <div className="content">
        {props.children}
      </div>

    </Container>
  );
};

export default Layout;