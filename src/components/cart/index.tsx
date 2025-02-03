'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { FiArrowLeft } from 'react-icons/fi';
import { CartCard } from '../cart-card';
import { Container } from './styles';
import { RootState } from '@/store';
import Image from 'next/image';
import {
  closeCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from '@/store/cartSlice';

export const Cart = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.cart.isOpen);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const calculateCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: isOpen ? 0 : '100%' }}
          exit={{ x: '100%' }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        >
          <Container $isOpen={isOpen}>
            <div className='cart'>
              <div className='cart-title'>
                <button
                  aria-label='close'
                  className='close-button'
                  onClick={() => dispatch(closeCart())}
                >
                  <FiArrowLeft className='close-icon' />
                </button>

                <h2>Mochila de Compras</h2>
              </div>

              <div className='cart-infos'>
                {cartItems.length === 0 ? (
                  <p className='empty-cart-message'>Seu carrinho está vazio.</p>
                ) : (
                  <>
                    <div className='list-cards'>
                      {cartItems.map((item) => (
                        <CartCard
                          key={item.id}
                          product={item}
                          onIncrease={() => dispatch(increaseQuantity(item.id))}
                          onDecrease={() => dispatch(decreaseQuantity(item.id))}
                          onRemove={() => dispatch(removeFromCart(item.id))}
                        />
                      ))}
                    </div>

                    <div className='cart-value'>
                      <h2>Total</h2>
                      <div className='cart-total-price'>
                        <Image
                          src='/Ellipse770.png'
                          alt='Logo'
                          width={29}
                          height={29}
                        />
                        <h2>{calculateCartTotal()} ETH</h2>
                      </div>
                    </div>

                    <motion.button
                      className='cart-button'
                      whileHover={{ scale: 1.0 }}
                      whileTap={{ scale: 0.8, y: 4 }}
                    >
                      COMPRAR
                    </motion.button>
                  </>
                )}
              </div>
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
