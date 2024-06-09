import Image from 'next/image'
import CopySVG from '@/app/assets/item/copy.svg'
import { useToast } from '@/app/hooks/useToast'

const CopyIcon = () => {
  const { showToast } = useToast()

  const copyToClipboard = () => {
    navigator.clipboard
      //TODO: 추가 예정
      .writeText('복사할 텍스트 API 받고 추가 예정')
      .then(() => {
        showToast({
          type: 'success',
          message: '복사되었습니다!',
        }) // 클릭 시 성공 토스트 메시지 표시
      })
      .catch(() => {
        showToast({
          type: 'error',
          message: '복사에 실패했습니다.',
        }) // 클릭 시 실패 토스트 메시지 표시
      })
  }

  return (
    <span
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white"
      onClick={copyToClipboard}
    >
      <span className="flex h-6 w-6 items-center justify-center">
        <Image src={CopySVG} alt="새 탭" width={100} height={100} />
      </span>
    </span>
  )
}

export default CopyIcon
