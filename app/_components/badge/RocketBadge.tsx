import Image from 'next/image'

const RocketBadge = () => {
  return (
    <span>
      <Image
        src="/images/badge/rocket.png"
        alt="rocket"
        width={80}
        height={80}
      />
    </span>
  )
}

export default RocketBadge
