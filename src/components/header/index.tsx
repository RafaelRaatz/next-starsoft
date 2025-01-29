import Image from 'next/image'
import { SlHandbag } from 'react-icons/sl'
import { Container } from './styles'

export function Header() {
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
          <button className="header-button">
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
