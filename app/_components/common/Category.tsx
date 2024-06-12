'use client'

import Image from 'next/image'
import Link from 'next/link'

interface CategoryComponentProps {
  name: string
  path: string
  routes: string
}

const CategoryComponent = ({ name, path, routes }: CategoryComponentProps) => {
  return (
    <Link href={`${routes}`}>
      <li className="group inline-flex cursor-pointer flex-col items-center justify-center gap-y-2">
        <span className="flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-200">
          <Image
            src={`/svg/categories/car.svg`}
            alt={name}
            width={58}
            height={58}
            className="transition-all duration-300 group-hover:scale-[1.05]"
          />
        </span>

        <span className="text-sm">{name}</span>
      </li>
    </Link>
  )
}

export default CategoryComponent
