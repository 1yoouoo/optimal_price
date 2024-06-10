import React from 'react'

const NotFound = () => {
  return (
    <section className="flex h-full items-center p-16">
      <div className="container mx-auto my-8 flex flex-col items-center justify-center px-5">
        <div className="max-w-md text-center">
          <h2 className="mb-8 text-9xl font-extrabold text-gray-400">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            요청하신 페이지를 찾을 수 없습니다.
          </p>
          <p className="my-8 text-gray-600">홈으로 돌아가시겠습니까?</p>
          <a
            rel="noopener noreferrer"
            href="/"
            className="rounded bg-[var(--primary-color)] px-8 py-3 font-semibold text-gray-50"
          >
            홈으로 돌아가기
          </a>
        </div>
      </div>
    </section>
  )
}

export default NotFound
