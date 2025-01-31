'use client'

import { useDispatch, useSelector } from 'react-redux'
import { closeCart } from '@/store/cartSlice'
import { RootState } from '@/store'
import { Container } from './styles'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FiArrowLeft } from 'react-icons/fi'
import { CartCard } from '../cart-card'

export const Cart = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector((state: RootState) => state.cart.isOpen)

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
            <div className="cart">
              <div className="cart-title">
                <button
                  className="close-button"
                  onClick={() => dispatch(closeCart())}
                >
                  <FiArrowLeft className="close-icon" />
                </button>

                <h2>Mochila de Compras</h2>
              </div>

              <div className="cart-infos">
                <div className="list-cards">
                  <CartCard />
                  <CartCard />
                </div>

                <div className="cart-value">
                  <h2>Total</h2>
                  <div className="cart-total-price">
                    <Image
                      src="/ellipse770.png"
                      alt="Logo"
                      width={29}
                      height={29}
                    />
                    <h2>32 ETH</h2>
                  </div>
                </div>

                <button className="cart-button">FINALIZAR COMPRA</button>
              </div>
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
