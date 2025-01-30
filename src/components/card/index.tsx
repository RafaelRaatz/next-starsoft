import Image from 'next/image'
import { Container } from './styles'

export function Card() {
  return (
    <Container>
      <div className="card">
        <div className="card-image">
          <Image src="/product.png" alt="Logo" width={296} height={258} />
        </div>
        <div className="card-info">
          <span className="card-title">Lorem Ipsum </span>
          <p className="card-description">
            Redesigned from scratch and completely revised
          </p>

          <div className="card-value">
            <Image src="/ellipse770.png" alt="Logo" width={29} height={29} />
            <h2>32 ETH</h2>
          </div>
          <button className="card-button">COMPRAR</button>
        </div>
      </div>
    </Container>
  )
}
