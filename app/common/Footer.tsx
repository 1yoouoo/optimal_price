const Footer = () => {
  return (
    <div className="relative flex h-80 flex-col border-t border-gray-300 px-20 py-12">
      <div className="flex">
        <div className="h-48 w-3/4 border-r border-gray-200">
          <p>
            이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일액의 수수료
            제공받습니다.
          </p>

          <br />

          <p>
            최적가는 쿠팡 파트너스의 API를 사용하여 가격 정보를 제공합니다.
            <br />
            제공되는 제품 가격 정보는 정확하지만 수시로 변경될 수 있으며 시차가
            발생할 수 있습니다.
          </p>

          <br />

          <p>
            최적가는 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서
            최적가는 상품, 거래정보 및 거래에 대해 책임을 지지 않습니다.
          </p>
        </div>
        <div className="w-1/4 px-12">
          <p>개발자</p>
        </div>
      </div>
      <p className="absolute bottom-0 mb-4 mt-4 w-full text-center text-gray-500">
        &copy; {new Date().getFullYear()}{' '}
        <a
          href="https://optimalprice.kr"
          className="text-blue-500 hover:underline"
        >
          optimalprice.kr
        </a>
        . All rights reserved.
      </p>
    </div>
  )
}

export default Footer
