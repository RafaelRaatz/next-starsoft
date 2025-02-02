import { FiTrash } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Container } from './styles';
import Image from 'next/image';

export function CartCard({
  product,
  onIncrease,
  onDecrease,
  onRemove,
}: CartCardProps) {
  const totalProductValue = product.price * product.quantity;
  const charLimit = 110;
  return (
    <motion.div
      className='card'
      whileHover={{
        scale: 1.05,
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container>
        <Image
          src={product.image}
          alt={product.name}
          width={139}
          height={139}
          className='card-image'
        />

        <div className='cart-card-bio'>
          <div className='cart-card-info'>
            <h2>{product.name} </h2>
            <p className='card-description'>
              {product.description.length > charLimit
                ? product.description.substring(0, charLimit) + '...'
                : product.description}
            </p>
            <div className='card-price'>
              <Image src='/ellipse770.png' alt='Logo' width={29} height={29} />
              <h2>{totalProductValue} ETH</h2>
            </div>
          </div>

          <div className='cart-card-buttons'>
            <div className='decrease-increase'>
              <button className='quantity-button' onClick={onDecrease}>
                -
              </button>
              <span className='quantity'>{product.quantity}</span>
              <button className='quantity-button' onClick={onIncrease}>
                +
              </button>
            </div>
            <motion.button
              className='trash-button'
              onClick={onRemove}
              aria-label='Remover'
              whileHover={{
                rotate: [-5, 5, -5],
                transition: { repeat: Infinity, duration: 0.2 },
              }}
              whileTap={{ scale: 0.8, opacity: 0.5 }}
            >
              <FiTrash size={20} />
            </motion.button>
          </div>
        </div>
      </Container>
    </motion.div>
  );
}
