import { Container } from './styles'
import Image from 'next/image'

export function CartCard({
  product,
  onIncrease,
  onDecrease,
  onRemove,
}: CartCardProps) {
  const totalProductValue = (product.price * product.quantity).toFixed(2)
  const charLimit = 80
  return (
    <Container>
      <Image
        src={product.image}
        alt={product.name}
        width={139}
        height={139}
        loading="lazy"
        className="card-image"
      />

      <div className="cart-card-bio">
        <div className="cart-card-info">
          <h2>{product.name} </h2>
          <p className="card-description">
            {product.description.length > charLimit
              ? product.description.substring(0, charLimit) + '...'
              : product.description}
          </p>
          <div className="card-price">
            <Image src="/ellipse770.png" alt="Logo" width={29} height={29} />
            <h2>{totalProductValue} ETH</h2>
          </div>
        </div>

        <div className="cart-card-buttons">
          <button className="quantity-button" onClick={onDecrease}>
            -
          </button>
          <span>{product.quantity}</span>
          <button className="quantity-button" onClick={onIncrease}>
            +
          </button>
          <button className="trash-button" onClick={onRemove}>
            🗑️
          </button>
        </div>
      </div>
    </Container>
  )
}
