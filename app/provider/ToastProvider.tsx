'use client'

import { createContext, useState, ReactNode, useEffect } from 'react'
import { Toast } from 'flowbite-react'
import { HiCheck, HiExclamation, HiX } from 'react-icons/hi'

interface ToastMessage {
  message: string
  type: 'success' | 'error' | 'info'
}

interface ToastContextType {
  // eslint-disable-next-line no-unused-vars
  showToast: (toast: ToastMessage) => void
}

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined
)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastMessage | null>(null)
  const [fadeIn, setFadeIn] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  const showToast: ToastContextType['showToast'] = (toast) => {
    setToast(toast)
    setFadeIn(true) // 즉시 페이드 인 시작
    setFadeOut(false) // 페이드 아웃 초기화

    setTimeout(() => {
      setFadeIn(false)
      setFadeOut(true)
    }, 2000) // 2초 후 페이드 아웃 시작
  }

  //TODO: 토스트를 queue로 관리해보자
  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(() => {
        setToast(null)
        setFadeOut(false)
      }, 500) // 0.5초 후 토스트 제거
      return () => clearTimeout(timer)
    }
  }, [fadeOut])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        className={`fixed bottom-10 left-1/2 z-50 flex -translate-x-1/2 transform flex-col gap-4 transition-all duration-500 ease-in-out ${
          fadeIn
            ? 'translate-y-0 opacity-100'
            : fadeOut
              ? '-translate-y-10 opacity-0'
              : 'translate-y-10 opacity-0'
        }`}
      >
        {toast && (
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-green-500">
              {toast.type === 'success' && <HiCheck className="h-5 w-5" />}
              {toast.type === 'error' && <HiExclamation className="h-5 w-5" />}
              {toast.type === 'info' && <HiX className="h-5 w-5" />}
            </div>
            <div className="ml-3 text-sm font-normal">{toast.message}</div>
            <Toast.Toggle />
          </Toast>
        )}
      </div>
    </ToastContext.Provider>
  )
}
