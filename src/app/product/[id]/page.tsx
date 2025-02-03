import { applyCorrections } from '@/utils/corrections';
import { ProductProps } from '@/utils/types/products';
import { redirect } from 'next/navigation';
import { DetailsCard } from './components';

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getProduct(id: string): Promise<ProductProps | null> {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/v1/products`, {
      next: { revalidate: 60 },
      cache: 'force-cache',
    });
    const data = await res.json();

    const product = data.data.find(
      (item: ProductProps) => item.id.toString() === id,
    );

    if (!product) {
      throw new Error('Produto não encontrado');
    }

    return applyCorrections(product);
  } catch (err) {
    console.error('Erro ao buscar dados:', err);
    return null;
  }
}

export default async function Home({ params }: PageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  if (!id) {
    redirect('/');
    return null;
  }

  const data: ProductProps | null = await getProduct(id);

  if (!data) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div>
      <DetailsCard data={data} />
    </div>
  );
}
