'use client';
import { ProductProps } from '@/utils/types/products';
import { addToCart } from '@/store/cartSlice';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { Container } from './styles';
import Image from 'next/image';

interface CardProps {
  data: ProductProps;
}

export function DetailsCard({ data }: CardProps) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleBuy = () => {
    dispatch(addToCart(data));
    toast.success(`${data.name} foi adicionado ao carrinho!`, {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: true,
      theme: 'dark',
    });
  };

  return (
    <Container>
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
        }}
        whileTap={{ scale: 0.9 }}
      >
        <div className='card'>
          <div className='card-content'>
            <div className='product'>
              <Image
                src={data.image}
                alt={data.name}
                width={350}
                height={350}
                loading='lazy'
                className='image'
              />

              <div className='card-info'>
                <span className='card-title'>{data.name} </span>{' '}
                <p className='card-description'>{data.description}</p>
                <div className='card-value'>
                  <Image
                    src='/Ellipse770.png'
                    alt='Logo'
                    width={29}
                    height={29}
                  />
                  <h2>{data.price} ETH</h2>
                </div>
              </div>
            </div>
            <motion.button
              onClick={handleBuy}
              className='card-button'
              whileTap={{ scale: 0.8, y: 4 }}
            >
              COMPRAR
            </motion.button>
          </div>
        </div>
      </motion.div>
      <button className='back-button' onClick={handleBack}>
        voltar
      </button>
    </Container>
  );
}
