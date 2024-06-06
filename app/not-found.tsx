import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h2 className="py-14 text-4xl">Not Found</h2>
      <Link href="/" className="text-xl">
        Return <b className="text-[var(--primary-color)]">Home</b>
      </Link>
    </div>
  )
}
