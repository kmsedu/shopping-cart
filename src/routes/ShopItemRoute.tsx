import { useMatch } from 'react-router-dom'
import data from '../data'

export default function ShopItemRoute (): JSX.Element {
  const id = useMatch('/shop/:id')?.params.id
  const itemData = data.find((dataItem) => dataItem.id === id)

  if (itemData === undefined) {
    throw new Error('Item not found in data list')
  }

  return (
    <div>{itemData.name}</div>
  )
}
