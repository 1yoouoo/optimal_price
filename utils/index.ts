/**
 * 통화 형식으로 변환합니다.
 * @param price
 * @returns
 */
export const formatCurrency = (price: number): string => {
  return (
    price
      .toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' })
      .replace('₩', '') + '원'
  )
}
