export const formatCurrency = (price: number): string => {
  return (
    price
      .toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' })
      .replace('₩', '') + '원'
  )
}
