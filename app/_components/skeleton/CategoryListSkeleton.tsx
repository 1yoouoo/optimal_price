const CategoryListSkeleton = () => {
  return (
    <div className="flex flex-row gap-x-[30.5px] overflow-hidden">
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index}>
          <div
            role="status"
            className="flex max-w-sm animate-pulse flex-col items-center justify-center gap-y-[18px] rounded"
          >
            <div className="h-[86px] w-[86px] rounded-3xl bg-slate-200" />
            <div className="h-2.5 w-20 rounded-full bg-slate-200" />
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategoryListSkeleton
