const Category = ({ params }: { params: { category?: string[] } }) => {
  return (
    <main>
      {params.category?.map((category) => <div key={category}>{category}</div>)}
    </main>
  )
}

export default Category
