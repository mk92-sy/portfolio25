import { useEffect, useRef, type ReactNode } from 'react'

import Header from './Header'
import Footer from './Footer'
import ScrollTopButton from '../molecules/ScrollTopButton'

// import { useStack } from "../../context/StackContext";
interface CommonLayoutProps {
  children: ReactNode
}

const CommonLayout = ({ children }: CommonLayoutProps) => {
  // const { stacks } = useStack();
  // const contentsRef = useRef<HTMLElement | null>(null);
  // useEffect(() => {
  //   if (contentsRef.current) {
  //     if (stacks.length > 0) {
  //       contentsRef.current.inert = true;
  //     } else {
  //       contentsRef.current.inert = false;
  //     }
  //   }
  // }, [stacks]);

  const getTimeClass = (hour: number): string => {
    if (hour >= 6 && hour < 12) return 'morning'
    if (hour >= 12 && hour < 18) return 'afternoon'
    if (hour >= 18 && hour < 21) return 'evening'
    return 'night'
  }

  const lastClassRef = useRef<string>(getTimeClass(new Date().getHours()))

  const updateBodyClass = () => {
    const now = new Date()
    const currentClass = getTimeClass(now.getHours())

    console.log('Current Time Class:', currentClass) // 디버그용 로그

    document.body.className = '' // 기존 클래스 제거
    document.body.classList.add(currentClass)
    lastClassRef.current = currentClass
  }

  useEffect(() => {
    updateBodyClass() // 초기 적용

    const intervalId = setInterval(() => {
      updateBodyClass()
    }, 10000) // 10초마다 체크 (분 단위 변경 감지용)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <main className="contents" id="Contents">
        <Header />
        {children}
        <Footer />
        <ScrollTopButton />
      </main>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        <defs>
          <filter
            id="glass-distortion"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.008 0.008"
              numOctaves="2"
              seed="92"
              result="noise"
            />
            <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="blurred"
              scale="77"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
    </>
  )
}

export default CommonLayout
