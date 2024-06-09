'use client'

import { createContext, useState, ReactNode } from 'react'
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

  const showToast: ToastContextType['showToast'] = (toast) => {
    setToast(toast)
    setTimeout(() => setToast(null), 3000) // 3초 후 토스트 메시지 사라짐
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast?.type === 'success' && (
        <span className="fixed bottom-10 left-1/2 z-50 flex -translate-x-1/2 transform flex-col gap-4">
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-green-500">
              <HiCheck className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">
              Item moved successfully.
            </div>
            <Toast.Toggle />
          </Toast>
        </span>
      )}

      {toast?.type === 'error' && (
        <span className="fixed bottom-10 left-1/2 z-50 flex -translate-x-1/2 transform flex-col gap-4">
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-green-500">
              <HiCheck className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">
              Item moved successfully.
            </div>
            <Toast.Toggle />
          </Toast>
        </span>
      )}

      {toast?.type === 'info' && (
        <span className="fixed bottom-10 left-1/2 z-50 flex -translate-x-1/2 transform flex-col gap-4">
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-green-500">
              <HiCheck className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">
              Item moved successfully.
            </div>
            <Toast.Toggle />
          </Toast>
        </span>
      )}
    </ToastContext.Provider>
  )
}
