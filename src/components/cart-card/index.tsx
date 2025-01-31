import { Container } from './styles'
import Image from 'next/image'

export function CartCard() {
  return (
    <Container>
      <div className="card-image">
        <Image src="/product.png" alt="Logo" width={139} height={139} />
      </div>
      <div className="cart-card-bio">
        <div className="cart-card-info">
          <h2>ITEM 2</h2>
          <p className="card-description">
            Redesigned from scratch and completely revised.
          </p>
          <div className="card-price">
            <Image src="/ellipse770.png" alt="Logo" width={29} height={29} />
            <h2>32 ETH</h2>
          </div>
        </div>

        <div className="cart-card-buttons">
          <button className="quantity-button">+ 1 -</button>
          <button className="trash-button">lixo</button>
        </div>
      </div>
    </Container>
  )
}
