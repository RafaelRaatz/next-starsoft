import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ProductProps } from '@/utils/types/products';
import { Provider } from 'react-redux';
import { toast } from 'react-toastify';
import { Card } from '@/components';
import { store } from '@/store';

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
  },
}));

const mockProduct: ProductProps = {
  id: 1,
  name: 'Produto 1',
  price: 10,
  image: '/produto1.png',
  description: 'Descrição do produto 1',
  createdAt: '2025-02-02T00:00:00Z',
};

describe('Card Component', () => {
  test('deve renderizar o produto corretamente', () => {
    render(
      <Provider store={store}>
        <Card data={mockProduct} />
      </Provider>,
    );

    expect(screen.getByText('Produto 1')).toBeInTheDocument();
    expect(screen.getByText('Descrição do produto 1')).toBeInTheDocument();
    expect(screen.getByText('10 ETH')).toBeInTheDocument();
  });

  test('deve chamar a função handleBuy e adicionar ao carrinho ao clicar no botão', async () => {
    render(
      <Provider store={store}>
        <Card data={mockProduct} />
      </Provider>,
    );

    const button = screen.getByText('COMPRAR');
    fireEvent.click(button);

    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith(
        `${mockProduct.name} foi adicionado ao carrinho!`,
        expect.objectContaining({
          position: 'bottom-right',
          autoClose: 2000,
          hideProgressBar: true,
          theme: 'dark',
        }),
      );
    });
  });
});
