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
  @media only screen and (max-width: 750px){
    width: 100%;
    margin-top: 10rem;
    margin-left: 0;
    padding: 2rem;
  }
`

export default function Projects() {
  return (
    <Container>
      <BackButton />
      <h1>Projetos</h1>
      <ProjectCard project={projects[0]} />
    </Container>
  )
}