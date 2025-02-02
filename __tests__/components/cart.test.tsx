import { render, screen, fireEvent } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/store/cartSlice';
import { Cart } from '@/components/cart';
import { Provider } from 'react-redux';

const productMock = {
  id: 1,
  name: 'Produto Teste',
  price: 10,
  image: '/produto.png',
  quantity: 1,
  description: 'descrição do produto teste',
  createdAt: '2025-02-02T00:00:00Z',
};

describe('Cart Component', () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        cart: cartReducer,
      },
      preloadedState: {
        cart: {
          isOpen: true,
          items: [productMock],
        },
      },
    });
  });

  test('deve renderizar o carrinho corretamente', () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>,
    );

    expect(screen.getByText('Mochila de Compras')).toBeInTheDocument();
    expect(screen.getByText('Produto Teste')).toBeInTheDocument();
    expect(screen.getAllByText('10 ETH')).toHaveLength(2);
  });

  test('deve fechar o carrinho ao clicar no botão', () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>,
    );

    fireEvent.click(screen.getByRole('button', { name: /close/i }));

    const state = store.getState();
    expect(state.cart.isOpen).toBe(false);
  });

  test('deve aumentar a quantidade do produto', () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>,
    );

    fireEvent.click(screen.getByRole('button', { name: /\+/i }));

    const state = store.getState();
    expect(state.cart.items[0].quantity).toBe(2);
  });

  test('deve diminuir a quantidade do produto', () => {
    store = configureStore({
      reducer: {
        cart: cartReducer,
      },
      preloadedState: {
        cart: {
          isOpen: true,
          items: [{ ...productMock, quantity: 2 }],
        },
      },
    });

    render(
      <Provider store={store}>
        <Cart />
      </Provider>,
    );

    fireEvent.click(screen.getByRole('button', { name: /-/i }));

    const state = store.getState();
    expect(state.cart.items[0].quantity).toBe(1);
  });

  test('deve remover o item ao clicar no botão de remoção', () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>,
    );

    fireEvent.click(screen.getByRole('button', { name: /remover/i }));

    const state = store.getState();
    expect(state.cart.items.length).toBe(0);
  });
});
