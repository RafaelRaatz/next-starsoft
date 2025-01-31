import { Card, CardList } from '@/components'
import { Container } from '@/styles/Home'
import { ProductProps } from '@/utils/types/products'

async function getListProducts() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/v1/products`)

    if (!res.ok) {
      throw new Error('Erro ao buscar produtos')
    }

    const { data } = await res.json()
    return data || []
  } catch (err) {
    throw new Error('failed to fetch data')
  }
}

export default async function Home() {
  const listProducts: ProductProps[] = await getListProducts()

  return (
    <div>
      <CardList listProducts={listProducts} />
    </div>
  )
}
