import styled from "styled-components"
import BackButton from "../../components/BackButton"
import Card from "../../components/Card"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  width: 50%;
  height: 100%;
  margin-left: 40%;
  @media only screen and (max-width: 750px){
    width: 100%;
    margin-top: 10rem;
    margin-left: 0;
    padding: 2rem;
  }
  .study-container{
    width: 100%;
    height: 50%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;
    @media only screen and (max-width: 750px){
      height: 60%;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }
  }
`

export default function Study() {
  return (
    <Container>
      <BackButton />
      <h1>Formação</h1>
      <div className="study-container">
        <Card>
          <h2>Cubos Academy</h2>
          <p className="year-sub">2022</p>
          <p className="description">Design UX/UI</p>
        </Card>
        <Card>
          <h2>Juventude Digital</h2>
          <p className="year-sub">2022</p>
          <p className="description">Design UX/UI</p>
        </Card>
        <Card>
          <h2>IFCE - Artes Visuais</h2>
          <p className="year-sub">2019 - 202X (Em andamento)</p>
          <p className="description">Ensino Superior - Graduação Licenciatura</p>
        </Card>
        <Card>
          <h2>Opa! Escola de Design</h2>
          <p className="year-sub">2019</p>
          <p className="description">Curso básico de design gráfico</p>
        </Card>
        <Card>
          <h2>Porto Iracema das Artes</h2>
          <p className="year-sub">2016</p>
          <p className="description">Curso Básico de artes (tradicional e digital)</p>
        </Card>
        <Card>
          <h2>Senac Idiomas</h2>
          <p className="year-sub">2013 - 2017</p>
          <p className="description">Inglês Fluente</p>

        </Card>
      </div>
    </Container>
  )
}