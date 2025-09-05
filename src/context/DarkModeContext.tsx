import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'

type DarkModeContextType = {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
)

export const DarkModeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | undefined>(undefined)

  // 🌙 시스템 설정 감지 함수
  const getSystemDarkMode = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches

  // 🌟 초기 상태 설정 (SSR-safe)
  useEffect(() => {
    const stored = localStorage.getItem('darkMode')
    if (stored !== null) {
      setIsDarkMode(stored === 'true')
    } else {
      setIsDarkMode(getSystemDarkMode())
    }
  }, [])

  // 🌟 시스템 설정 변경 감지
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem('darkMode')
      if (stored === null) {
        setIsDarkMode(e.matches)
      }
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // 🌟 상태 변경 시 localStorage & HTML 클래스 업데이트
  useEffect(() => {
    if (isDarkMode === undefined) return

    document.documentElement.classList.toggle('dark', isDarkMode)
    localStorage.setItem('darkMode', isDarkMode.toString())

    // 모바일 브라우저 상단 색상 변경
    const themeColor = document.querySelector("meta[name='theme-color']")
    if (themeColor) {
      themeColor.setAttribute('content', isDarkMode ? '#121212' : '#ffffff')
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
  }

  // 아직 초기 상태가 설정되지 않았다면 렌더링 지연
  if (isDarkMode === undefined) {
    return null
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = () => {
  const context = useContext(DarkModeContext)
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider')
  }
  return context
}
