import Image from 'next/image'
import FooterSvgWrapper from './FooterSvgWrapper'
import GithubSVG from '@/public/svg/footer/github.svg'
import TistorySVG from '@/public/svg/footer/tistory.svg'
import GmailSVG from '@/public/svg/footer/gmail.svg'

const Footer = () => {
  return (
    <div className="relative mt-40 flex h-80 flex-col border-t border-gray-300 py-12">
      <div className="flex px-20">
        <div className="h-48 w-10/12 border-r border-gray-200">
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
        <div className="w-2/12 px-12">
          <div className="flex flex-col gap-1">
            <FooterSvgWrapper
              SvgComponent={
                <Image src={GmailSVG} alt="gmail" width={30} height={30} />
              }
              href="mailto:optimalprice2024@gmail.com"
            />
            <span className="flex">
              <FooterSvgWrapper
                SvgComponent={
                  <Image src={GithubSVG} alt="github" width={30} height={30} />
                }
                href="https://github.com/taegyun1995"
              />
              <FooterSvgWrapper
                SvgComponent={
                  <Image
                    src={TistorySVG}
                    alt="tistory"
                    width={30}
                    height={30}
                  />
                }
                href="https://gyunny.tistory.com"
              />
            </span>
            <span className="flex">
              <FooterSvgWrapper
                SvgComponent={
                  <Image src={GithubSVG} alt="github" width={30} height={30} />
                }
                href="https://github.com/1yoouoo"
              />
              <FooterSvgWrapper
                SvgComponent={
                  <Image
                    src={TistorySVG}
                    alt="tistory"
                    width={30}
                    height={30}
                  />
                }
                href="https://1yoouoo.tistory.com"
              />
            </span>
          </div>
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
