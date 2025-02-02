export const correctionsMap: Record<string, string> = {
  'Boots of Ppeed': 'Boots of Speed',
};

export function applyCorrections(product: any) {
  return {
    ...product,
    name: correctionsMap[product.name] || product.name,
  };
}
