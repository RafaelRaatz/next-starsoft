interface CartCardProps {
  product: {
    id: number
    name: string
    description: string
    image: string
    price: number
    quantity: number
  }
  onIncrease: () => void
  onDecrease: () => void
  onRemove: () => void
}
