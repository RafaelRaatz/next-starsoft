import { render, screen, fireEvent } from '@testing-library/react';
import { ProductProps } from '@/utils/types/products';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/store/cartSlice';
import { CardList } from '@/components';
import { Provider } from 'react-redux';

const mockProducts: ProductProps[] = [
  {
    id: 1,
    name: 'Produto 1',
    price: 10,
    image: '/produto1.png',
    description: 'Descrição 1',
    createdAt: '2025-02-02T00:00:00Z',
  },
  {
    id: 2,
    name: 'Produto 2',
    price: 20,
    image: '/produto2.png',
    description: 'Descrição 2',
    createdAt: '2025-02-02T00:00:00Z',
  },
  {
    id: 3,
    name: 'Produto 3',
    price: 30,
    image: '/produto3.png',
    description: 'Descrição 3',
    createdAt: '2025-02-02T00:00:00Z',
  },
  {
    id: 4,
    name: 'Produto 4',
    price: 40,
    image: '/produto4.png',
    description: 'Descrição 4',
    createdAt: '2025-02-02T00:00:00Z',
  },
  {
    id: 5,
    name: 'Produto 5',
    price: 50,
    image: '/produto5.png',
    description: 'Descrição 5',
    createdAt: '2025-02-02T00:00:00Z',
  },
  {
    id: 6,
    name: 'Produto 6',
    price: 60,
    image: '/produto6.png',
    description: 'Descrição 6',
    createdAt: '2025-02-02T00:00:00Z',
  },
  {
    id: 7,
    name: 'Produto 7',
    price: 70,
    image: '/produto7.png',
    description: 'Descrição 7',
    createdAt: '2025-02-02T00:00:00Z',
  },
  {
    id: 8,
    name: 'Produto 7',
    price: 80,
    image: '/produto8.png',
    description: 'Descrição 8',
    createdAt: '2025-02-02T00:00:00Z',
  },
];

describe('CardList Component', () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        cart: cartReducer,
      },
      preloadedState: {
        cart: {
          isOpen: true,
          items: [],
        },
      },
    });
  });

  test('deve renderizar os produtos corretamente', () => {
    render(
      <Provider store={store}>
        <CardList listProducts={mockProducts} />
      </Provider>,
    );

    expect(screen.getAllByRole('article')).toHaveLength(4);
  });

  test('deve carregar mais produtos ao clicar no botão', () => {
    render(
      <Provider store={store}>
        <CardList listProducts={mockProducts} />
      </Provider>,
    );

    fireEvent.click(screen.getByText(/Carregar mais/i));

    expect(screen.getAllByRole('article')).toHaveLength(8);
  });
});
