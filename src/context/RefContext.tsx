import { createContext, useContext, useState } from 'react'

type RefContextType = {
  returnRef: React.RefObject<HTMLElement> | null // HTMLElement로 변경
  setReturnRef: (ref: React.RefObject<HTMLElement> | null) => void
}

const RefContext = createContext<RefContextType | undefined>(undefined)

export const RefProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [returnRef, setReturnRef] =
    useState<React.RefObject<HTMLElement> | null>(null)

  return (
    <RefContext.Provider value={{ returnRef, setReturnRef }}>
      {children}
    </RefContext.Provider>
  )
}

export const useRefContext = () => {
  const context = useContext(RefContext)
  if (!context) {
    throw new Error('useRefContext must be used within a RefProvider')
  }
  return context
}
