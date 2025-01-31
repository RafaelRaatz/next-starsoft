'use client'
import { useState } from 'react'
import { Card } from '..'
import { ProductProps } from '@/utils/types/products'
import { Container } from './styles'
import { motion } from 'framer-motion'

export function CardList({ listProducts }: { listProducts: ProductProps[] }) {
  const [visibleProducts, setVisibleProducts] = useState(4)

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4)
  }

  const allProductsVisible = visibleProducts >= listProducts.length

  const progress = (visibleProducts / listProducts.length) * 100

  return (
    <Container>
      <div className="list-cards">
        {listProducts.slice(0, visibleProducts).map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <div className="load-area">
        <div className="progress-bar-container">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{
              height: '100%',
              background: '#ff8310',
              borderRadius: '8px',
            }}
          />
        </div>

        {allProductsVisible ? (
          <button className="load-button">Você já viu tudo!</button>
        ) : (
          <button className="load-button" onClick={loadMoreProducts}>
            Carregar mais
          </button>
        )}
      </div>
    </Container>
  )
}
