'use client';
import { ProductProps } from '@/utils/types/products';
import { motion } from 'framer-motion';
import { Container } from './styles';
import { useState } from 'react';
import { Card } from '..';

export function CardList({ listProducts }: { listProducts: ProductProps[] }) {
  const [visibleProducts, setVisibleProducts] = useState(4);

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  const allProductsVisible = visibleProducts >= listProducts.length;

  const progress = (visibleProducts / listProducts.length) * 100;

  return (
    <Container>
      <div className='list-cards'>
        {listProducts.slice(0, visibleProducts).map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <div className='load-area'>
        <div className='progress-bar-container'>
          <motion.div
            aria-valuemax={100}
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
          <button className='load-button'>Você já viu tudo!</button>
        ) : (
          <button className='load-button' onClick={loadMoreProducts}>
            Carregar mais
          </button>
        )}
      </div>
    </Container>
  );
}
