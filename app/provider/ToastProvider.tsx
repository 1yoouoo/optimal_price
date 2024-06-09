'use client'

import { createContext, useState, ReactNode, useEffect } from 'react'

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
    }, 2000000) // 2초 후 페이드 아웃 시작
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
        <div
          className="max-w-xs rounded-xl border border-gray-200 bg-white shadow-lg"
          role="alert"
        >
          <div className="flex min-w-64 p-4">
            <div className="flex-shrink-0">
              {toast?.type === 'success' && (
                <svg
                  className="mt-0.5 size-4 flex-shrink-0 text-teal-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </svg>
              )}

              {toast?.type === 'error' && (
                <svg
                  className="mt-0.5 size-4 flex-shrink-0 text-red-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
                </svg>
              )}

              {toast?.type === 'info' && (
                <svg
                  className="mt-0.5 size-4 flex-shrink-0 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
                </svg>
              )}
            </div>
            <div className="ms-3">
              <p className="text-sm text-gray-700">{toast?.message}</p>
            </div>
          </div>
        </div>
      </div>
    </ToastContext.Provider>
  )
}
