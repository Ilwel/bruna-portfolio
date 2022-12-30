import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"
import BackButton from "../../components/BackButton"
import mailIcon from '../../public/icons/mail.svg'
import wppIcon from '../../public/icons/wpp.svg'
import linkedinIcon from '../../public/icons/linkedin.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  margin-left: 50%;
  gap: 5rem;
  @media only screen and (max-width: 750px){
    width: 100%;
    margin-top: 10rem;
    margin-left: 0;
    padding: 2rem;
  }
  .contact-links{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    img{
      width: 5rem;
      height: 4rem;
      opacity: 0.5;
      transition: 0.5s;
      @media only screen and (max-width: 750px){
        opacity: 1;
      }
      :hover{
        opacity: 1;
        transform: scale(1.1);
      }
  }
}
  `

export default function Contact() {
  return (
    <Container>
      <BackButton />
      <h1>Contato</h1>
      <div className="contact-links">
        <Link href='mailto:brunasouza.lcs@gmail.com' target='_blank'>
          <Image src={mailIcon} alt='mail icon' />
        </Link>
        <Link href='https://wa.me/5585991591810' target='_blank'>
          <Image src={wppIcon} alt='mail icon' />
        </Link>
        <Link href='https://www.linkedin.com/in/bruna-lopes-souza/' target='_blank'>
          <Image src={linkedinIcon} alt='mail icon' />
        </Link>
      </div>
    </Container>
  )
}