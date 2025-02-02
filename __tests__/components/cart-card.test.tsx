import { render, screen, fireEvent } from '@testing-library/react';
import { CartCard } from '@/components'; // Ajuste conforme o caminho do seu componente
import { ProductProps } from '@/utils/types/products';

interface CartItem extends ProductProps {
  quantity: number;
}

const mockProduct: CartItem = {
  id: 1,
  name: 'Produto 1',
  price: 10,
  image: '/produto1.png',
  description: 'Descrição do produto 1',
  quantity: 2,
  createdAt: '2025-02-02T00:00:00Z',
};

describe('CartCard Component', () => {
  const mockOnIncrease = jest.fn();
  const mockOnDecrease = jest.fn();
  const mockOnRemove = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('deve renderizar o produto corretamente', () => {
    render(
      <CartCard
        product={mockProduct}
        onIncrease={mockOnIncrease}
        onDecrease={mockOnDecrease}
        onRemove={mockOnRemove}
      />,
    );

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(screen.getByText('20 ETH')).toBeInTheDocument(); // 10 * 2 = 20
  });

  test('deve chamar a função onIncrease ao clicar no botão +', () => {
    render(
      <CartCard
        product={mockProduct}
        onIncrease={mockOnIncrease}
        onDecrease={mockOnDecrease}
        onRemove={mockOnRemove}
      />,
    );

    const increaseButton = screen.getByText('+');
    fireEvent.click(increaseButton);

    expect(mockOnIncrease).toHaveBeenCalledTimes(1);
  });

  test('deve chamar a função onDecrease ao clicar no botão -', () => {
    render(
      <CartCard
        product={mockProduct}
        onIncrease={mockOnIncrease}
        onDecrease={mockOnDecrease}
        onRemove={mockOnRemove}
      />,
    );

    const decreaseButton = screen.getByText('-');
    fireEvent.click(decreaseButton);

    expect(mockOnDecrease).toHaveBeenCalledTimes(1);
  });

  test('deve chamar a função onRemove ao clicar no botão de remover', () => {
    render(
      <CartCard
        product={mockProduct}
        onIncrease={mockOnIncrease}
        onDecrease={mockOnDecrease}
        onRemove={mockOnRemove}
      />,
    );

    const removeButton = screen.getByLabelText('Remover');
    fireEvent.click(removeButton);

    expect(mockOnRemove).toHaveBeenCalledTimes(1);
  });
});
