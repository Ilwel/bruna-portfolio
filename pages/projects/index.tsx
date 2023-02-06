import { useState } from "react"
import styled from "styled-components"
import BackButton from "../../components/BackButton"
import ProjectCard from "../../components/ProjectCard"
import projects from "../../utils/projects"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  margin-left: 50%;
  gap: 5rem;
  .nav-buttons{
    display: flex;
    gap: 2rem;
    button{
      all: unset;
      cursor: pointer;
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

  @media only screen and (max-width: 750px){
    width: 100%;
    margin-top: 10rem;
    margin-left: 0;
    padding: 2rem;
  }
`

export default function Projects() {
  const [index, setIndex] = useState(0)
  const handlePrev = () => {
    if (index === 0) return
    setIndex(index - 1)
  }
  const handleNext = () => {
    if ((index + 1) === projects.length) return
    setIndex(index + 1)
  }
  return (
    <Container>
      <BackButton />
      <h1>Projetos</h1>
      <ProjectCard project={projects[index]} />
      <div className="nav-buttons">
        <button onClick={handlePrev}>Anterior</button>
        <button onClick={handleNext}>Próximo</button>
      </div>
    </Container>
  )
}