import { Card } from '@/components'
import { Container } from '@/styles/Home'

export default function Home() {
  return (
    <Container>
      <div className="list-cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="load-area">
        <span>barra de progresso</span>
        <button className="load-button">Carregar mais</button>
      </div>
    </Container>
  )
}
