import { Footer, Header } from '@/components'
import { ProductProps } from '@/utils/types/products'
import { redirect } from 'next/navigation'
import { DetailsCard } from './components'

async function getProduct(id: string): Promise<ProductProps | null> {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/v1/products`)
    const data = await res.json()

    const product = data.data.find(
      (item: ProductProps) => item.id.toString() === id
    )

    if (!product) {
      throw new Error('Produto não encontrado')
    }

    return product
  } catch (err) {
    console.error('Erro ao buscar dados:', err)
    return null
  }
}

export default async function Home({ params }: { params: { id: string } }) {
  const { id } = await params
  if (!id) {
    redirect('/')
    return null
  }

  const data: ProductProps | null = await getProduct(id)

  if (!data) {
    return <div>Produto não encontrado</div>
  }

  return (
    <div>
      <Header />
      <DetailsCard data={data} />
      <Footer />
    </div>
  )
}
