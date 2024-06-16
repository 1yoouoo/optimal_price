interface DiscountBadgeProps {
  discountPercent: number
}

const DiscountBadge = ({ discountPercent }: DiscountBadgeProps) => {
  return (
    <span className="absolute right-7 top-0 cursor-default rounded-sm bg-red-500 p-1 text-lg text-white">
      {discountPercent}%
    </span>
  )
}

export default DiscountBadge
