'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface CategoryComponentProps {
  name: string
  path: string
  routes: string
}

const CategoryComponent = ({ name, path, routes }: CategoryComponentProps) => {
  const [CategoryIcon, setCategoryIcon] = useState(null)

  useEffect(() => {
    import(`@/public/categories/${path}.svg`)
      .then((module) => setCategoryIcon(module.default))
      .catch((err) => console.error(`Error loading SVG: ${err}`))
  }, [path])

  if (!CategoryIcon) return null

  return (
    <Link href={`${routes}`}>
      <li className="group inline-flex cursor-pointer flex-col items-center justify-center gap-y-2">
        <span className="flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-200">
          <Image
            src={CategoryIcon}
            alt={name}
            width={60}
            height={60}
            className="transition-all duration-300 group-hover:scale-[1.05]"
          />
        </span>

        <span className="text-sm">{name}</span>
      </li>
    </Link>
  )
}

export default CategoryComponent
