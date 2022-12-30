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
  .work-container{
    width: 80%;
    height: 30%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 1rem;
  }
  `

export default function Work() {
  return (
    <Container>
      <BackButton />
      <h1>Experiência</h1>
      <div className="work-container">
        <Card>
          <h2>Central Donuts 1</h2>
          <p className="year-sub">2020</p>
          <p className="description">Social media e diretora de arte</p>
        </Card>
        <Card>
          <h2>DB Design</h2>
          <p className="year-sub">2019 - 2020</p>
          <p className="description">Social media e diretora de arte</p>
        </Card>
      </div>
    </Container>
  )
}