import Image from "next/image"
import styled from "styled-components"
import NavOption from "../components/NavOption"
import studyIcon from '../public/icons/study.svg'
import workIcon from '../public/icons/work.svg'
import projectIcon from '../public/icons/project.svg'
import mailIcon from '../public/icons/mail.svg'
import Link from "next/link"

const Container = styled.div`
  h1{
    margin-left: 50rem;
    margin-top: 19rem;
  }
  .sub-title {
    margin-left: 53rem;
    font-size: 2rem;
  }
  @media only screen and (max-width: 750px){
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    h1{
      margin-left: 0;
      margin-top: 22rem;
    }
    .sub-title {
      margin-left: 0;
    }
  }
  .nav-options{
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 5rem;
    @media only screen and (max-width: 750px){
      display: grid;
      grid-template-columns: repeat(2, 20rem);
      grid-template-rows: repeat(2, 1fr);
      gap: 1rem;
      width: 50%;
    }
  }
`

export default function Home() {
  return (
    <Container>
      <h1>Bruna Lopes</h1>
      <p className="sub-title">UX | UI Designer</p>
      <div className="nav-options">
        <Link href='study'>
          <NavOption>
            <Image src={studyIcon} alt='study icon' />
            <p>Formação</p>
          </NavOption>
        </Link>
        <Link href='work'>
          <NavOption>
            <Image src={workIcon} alt='work icon' />
            <p>Experiência</p>
          </NavOption>
        </Link>
        <Link href='projects'>
          <NavOption>
            <Image src={projectIcon} alt='project icon' />
            <p>Projetos</p>
          </NavOption>
        </Link>
        <Link href='contact'>
          <NavOption>
            <Image src={mailIcon} alt='mail icon' />
            <p>Contato</p>
          </NavOption>
        </Link>
      </div>
    </Container>

  )
}
