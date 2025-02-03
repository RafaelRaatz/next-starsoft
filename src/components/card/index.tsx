import { ProductProps } from '@/utils/types/products';
import { addToCart } from '@/store/cartSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { Container } from './styles';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  data: ProductProps;
}

export function Card({ data }: CardProps) {
  const charLimit = 80;
  const dispatch = useDispatch();

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
    <motion.article
      className='card'
      whileHover={{
        scale: 1.05,
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Container>
        <div className='card'>
          <Link href={`/product/${data.id}`} className='product'>
            <Image
              src={data.image}
              alt={data.name}
              width={296}
              height={258}
              className='image'
            />

            <div className='card-info'>
              <span className='card-title'>{data.name} </span>{' '}
              <p className='card-description'>
                {data.description.length > charLimit
                  ? data.description.substring(0, charLimit) + '...'
                  : data.description}
              </p>
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
          </Link>
          <motion.button
            onClick={handleBuy}
            className='card-button'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8, y: 4 }}
          >
            COMPRAR
          </motion.button>
        </div>
      </Container>
    </motion.article>
  );
}
