import Image from 'next/image'
import Link from 'next/link'
import { Container } from './styles'
import { ProductProps } from '@/utils/types/products'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/store/cartSlice'

interface CardProps {
  data: ProductProps
}

export function Card({ data }: CardProps) {
  const charLimit = 80
  const dispatch = useDispatch()

  const handleBuy = () => {
    dispatch(addToCart(data)) // Adiciona o produto ao carrinho
  }

  return (
    <Container>
      <div className="card">
        <Link href={`/product/${data.id}`} className="product">
          <Image
            src={data.image}
            alt={data.name}
            width={296}
            height={258}
            loading="lazy"
            className="image"
          />

          <div className="card-info">
            <span className="card-title">{data.name} </span>{' '}
            <p className="card-description">
              {data.description.length > charLimit
                ? data.description.substring(0, charLimit) + '...'
                : data.description}
            </p>
            <div className="card-value">
              <Image src="/ellipse770.png" alt="Logo" width={29} height={29} />
              <h2>{data.price} ETH</h2>
            </div>
          </div>
        </Link>
        <button onClick={handleBuy} className="card-button">
          COMPRAR
        </button>
      </div>
    </Container>
  )
}
