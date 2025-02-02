import cartReducer, {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  toggleCart,
  closeCart,
} from '@/store/cartSlice';

describe('cartSlice', () => {
  const initialState = {
    isOpen: false,
    items: [],
  };

  const mockProduct = {
    id: 1,
    name: 'Produto Teste',
    description: 'Descrição do Produto Teste',
    price: 10,
    image: '/produto.png',
    quantity: 1,
    createdAt: '2025-02-02T00:00:00Z',
  };

  test('deve adicionar um item ao carrinho', () => {
    const newState = cartReducer(initialState, addToCart(mockProduct));
    expect(newState.items.length).toBe(1);
    expect(newState.items[0]).toEqual({ ...mockProduct, quantity: 1 });
  });

  test('deve remover um item do carrinho', () => {
    const stateWithItem = {
      ...initialState,
      items: [{ ...mockProduct, quantity: 1 }],
    };
    const newState = cartReducer(stateWithItem, removeFromCart(1));
    expect(newState.items.length).toBe(0);
  });

  test('deve aumentar a quantidade do item', () => {
    const stateWithItem = {
      ...initialState,
      items: [{ ...mockProduct, quantity: 1 }],
    };
    const newState = cartReducer(stateWithItem, increaseQuantity(1));
    expect(newState.items[0].quantity).toBe(2);
  });

  test('deve diminuir a quantidade do item', () => {
    const stateWithItem = {
      ...initialState,
      items: [{ ...mockProduct, quantity: 2 }],
    };
    const newState = cartReducer(stateWithItem, decreaseQuantity(1));
    expect(newState.items[0].quantity).toBe(1);
  });

  test('deve remover o item se a quantidade for 1 ao diminuir', () => {
    const stateWithItem = {
      ...initialState,
      items: [{ ...mockProduct, quantity: 1 }],
    };
    const newState = cartReducer(stateWithItem, decreaseQuantity(1));
    expect(newState.items.length).toBe(0);
  });

  test('deve abrir e fechar o carrinho corretamente', () => {
    let newState = cartReducer(initialState, toggleCart());
    expect(newState.isOpen).toBe(true);

    newState = cartReducer(newState, closeCart());
    expect(newState.isOpen).toBe(false);
  });
});
