'use client'
import Image from 'next/image'
import { Container } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCart } from '@/store/cartSlice'
import { RootState } from '@/store'

export function Header() {
  const dispatch = useDispatch()
  const cartCount = useSelector((state: RootState) => state.cart.items.length)
  return (
    <Container>
      <div className="header-content">
        <Image
          src="/logo.png"
          alt="Logo"
          width={101}
          height={38}
          sizes="(max-width: 600px) 50vw, 25vw"
        />
        <div className="header-card">
          <button
            onClick={() => dispatch(toggleCart())}
            className="header-button"
          >
            <Image
              src="/bag.png"
              alt="bag"
              width={33}
              height={33}
              sizes="(max-width: 600px) 50vw, 25vw"
            />
          </button>
          <span className="header-count-card">{cartCount}</span>
        </div>
      </div>
    </Container>
  )
}
