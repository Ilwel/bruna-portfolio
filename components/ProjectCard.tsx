import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import figmaIcon from '../public/icons/figma.svg'
import googlePhotosIcon from '../public/icons/google-photos.svg'

type ProjectCardProps = {
  project: {
    isFigma: boolean
    title: string
    description: string,
    img: StaticImageData,
    figmaPrototype: string,
    figmaProject: string,
    link: string
  }
}

const Container = styled.div`
  background-color: var(--surface-1-70);
  height: 40rem;
  width: 90%;
  padding: 5rem;
  border-radius: 1rem;
  display: flex;  
  align-items: center;
  gap: 5rem;
  @media only screen and (max-width: 750px){
    justify-content: center;
  }
  .infos{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    p{
      font-size: 1.3rem;
      width: 80%;
      height: 40%;
      @media only screen and (max-width: 882px){
        display: none;
      }
    }
  }
  .right-side{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media only screen and (max-width: 750px){
      align-items: center;
      justify-content: center;
    }
  }
  .bottom-buttons{
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
    @media only screen and (max-width: 882px){
      flex-direction: column;
    }
    a{
      display: flex;
      gap: 1rem;
      padding: 1.5rem;
      background-color: var(--base);
      justify-content: center;
      border-radius: 1rem;
      opacity: 0.7;
      transition: 0.5s;
      :hover{
        opacity: 1;
        transform: scale(1.1);
      }
    }
  }
  .project-img{
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    border: solid 0.1rem var(--text);
  }
`

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Container>
      <Image className='project-img' src={props.project.img} alt='project image' />
      <div className="right-side">
        <div className="infos">
          <h2>{props.project.title}</h2>
          <p>
            {props.project.description}
          </p>
        </div>
        <div className="bottom-buttons">
          {props.project.isFigma ? (
            <>
              <Link href={props.project.figmaProject} target='_blank'>
                <Image src={figmaIcon} alt='figma icon' />
                <p>
                  Projeto Figma
                </p>
              </Link>
              <Link href={props.project.figmaPrototype} target='_blank'>
                <Image src={figmaIcon} alt='figma icon' />
                <p>
                  Protótipo
                </p>
              </Link>
            </>
          ) : (
            <Link href={props.project.link} target='_blank'>
              <Image src={googlePhotosIcon} alt='figma icon' />
              <p>
                Google Fotos
              </p>
            </Link>
          )}
        </div>
      </div>
    </Container>
  );
};

export default ProjectCard;