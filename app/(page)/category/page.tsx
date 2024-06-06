import Image from 'next/image'

export default function Category() {
  return (
    <main className="">
      <Image
        src="https://cdn.optimalprice.kr/cat01.webp"
        alt="Slide 1"
        width={1280}
        height={660}
        objectFit="cover"
        //   className="max-h-[660px] rounded-3xl"
      />
    </main>
  )
}
