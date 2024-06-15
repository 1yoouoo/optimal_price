const ItemListSwiperSkeleton = () => {
  return (
    <div className="flex h-[316px] w-[1280px] flex-row gap-1 overflow-hidden">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          role="status"
          className="h-[292px] w-[248px] max-w-sm animate-pulse rounded px-6"
          key={index}
        >
          <div className="mb-4 flex h-[188px] w-[220px] items-center justify-center rounded bg-slate-100">
            <svg
              className="h-10 w-10 text-slate-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
          <div className="mb-4 h-2.5 w-32 rounded-full bg-slate-100"></div>
          <div className="h-2 w-48 rounded-full bg-slate-100"></div>
          <div className="relative mt-4 flex items-center">
            <div className="absolute right-0 mt-4 h-3 w-24 rounded-full bg-slate-100"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      ))}
    </div>
  )
}

export default ItemListSwiperSkeleton
