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

/**
 * 숫자를 세 자리마다 콤마로 구분하여 형식화합니다.
 * @param value 숫자 값
 * @returns 형식화된 문자열
 */
export const formatNumberWithCommas = (value: number): string => {
  return value.toLocaleString('ko-KR')
}
