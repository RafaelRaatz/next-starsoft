import Image from 'next/image'
import Link from 'next/link'
import { Container } from './styles'
import { ProductProps } from '@/utils/types/products'

interface CardProps {
  data: ProductProps
}

export function Card({ data }: CardProps) {
  const charLimit = 80

  return (
    <Container>
      <div className="card">
        <Link href={`/product/${data.id}`} className="product">
          <Image
            src={data.image}
            alt={data.name}
            width={296}
            height={258}
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
        <button className="card-button">COMPRAR</button>
      </div>
    </Container>
  )
}
