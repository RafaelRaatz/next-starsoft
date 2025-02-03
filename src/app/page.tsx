import { applyCorrections } from '@/utils/corrections';
import { ProductProps } from '@/utils/types/products';
import { CardList } from '@/components';

async function getListProducts() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/v1/products`, {
      next: { revalidate: 60 },
      cache: 'force-cache',
    });

    if (!res.ok) {
      throw new Error('Erro ao buscar produtos');
    }

    const { data } = await res.json();
    return data.map(applyCorrections) || [];
  } catch (err) {
    throw new Error('Erro ao buscar data');
  }
}

export default async function Home() {
  const listProducts: ProductProps[] = await getListProducts();

  return (
    <div>
      <CardList listProducts={listProducts} />
    </div>
  );
}
