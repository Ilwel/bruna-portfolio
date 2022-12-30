import Link from "next/link"
import styled from "styled-components"

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  h2{
    font-weight: normal;
    font-size: 3rem;
    opacity: 0.7;
    margin-left: 40rem;
    color: var(--pink);
  }
  a{
    all: unset;
    cursor: pointer;
    font-weight: bold;
    font-size: 2rem;
    background-color: var(--pink);
    color: var(--crust);
    padding: 2rem;
    border-radius: 1rem;
    opacity: 0.7;
    transition: 0.5s;
    :hover{
      opacity: 1;
      transform: scale(1.1);
    }
  }
`

export default function Four0Four() {
  return (
    <Container>
      <h2>404 Página não encontrada</h2>
      <Link href='/' >Voltar para início</Link>
    </Container>
  )
}