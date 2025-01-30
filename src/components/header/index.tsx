'use client'
import Image from 'next/image'
import { Container } from './styles'
import { useDispatch } from 'react-redux'
import { toggleCart } from '@/store/cartSlice'

export function Header() {
  const dispatch = useDispatch()
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
          <span className="header-count-card">0</span>
        </div>
      </div>
    </Container>
  )
}
