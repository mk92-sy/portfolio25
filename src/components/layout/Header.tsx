import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useScroll } from '../../context/ScrollContext'
import { useActiveContent } from '../../context/ActiveContents'
import { useWeather } from '../../hooks/useWeather'
import css from './Header.module.scss'
import PhysicsCircles from '../etc/PhysicsCircles'

const Header = () => {
  const { scrollY } = useScroll()
  const { activeContent, setActiveContent } = useActiveContent()
  const { currentWeather } = useWeather()

  return (
    <>
      {activeContent === 0 && currentWeather && (
        <VisualSection weatherMain={currentWeather.weather[0]?.main ?? ''} />
      )}
      <div className={css['navigation-bar']}>
        <div className={css['navigation-content']}>
          <h1
            className={`${css['brand-title']} ${
              scrollY > 200 ? css.visible : ''
            }`}
            aria-label="웹 퍼블리셔, 이승연"
          >
            <Link
              to="/"
              onClick={() => {
                setActiveContent(0)
              }}
            >
              SEUNGYEON LEE
            </Link>
            <span className={css['online-status']} />
          </h1>
        </div>
      </div>
    </>
  )
}

const MemoizedPhysicsCircles = React.memo(PhysicsCircles)

const VisualSection = React.memo(({ weatherMain }: { weatherMain: string }) => {
  const circlesData = useMemo(
    () => [
      { text: '🎮', color: '#444', size: '45px' },
      { text: 'ISFP', color: '#444', size: '55px' },
      { text: '🐑🐵', color: '#444', size: '55px' },
      { text: '맛집탐방', color: '#444', size: '75px' },
      { text: '글쓰기', color: '#444', size: '65px' },
      { text: 'GIT', color: '#2F6CE5', size: '45px' },
      { text: 'HTML5', color: '#E34F26 ', size: '80px' },
      { text: 'CSS3', color: '#264DE4', size: '90px' },
      { text: '접근성', color: '#28A745', size: '100px' },
      { text: 'UX/UI', color: '#007BFF', size: '85px' },
      { text: 'Javascript', color: '#F2C400', size: '100px' },
      { text: 'Typescript', color: '#3178C6', size: '110px' },
      { text: 'React', color: '#61DAFB', size: '110px' },
    ],
    []
  )
  return (
    <div className={`${css['visual-section']} ${css[weatherMain] ?? ''}`}>
      <MemoizedPhysicsCircles data={circlesData} />
    </div>
  )
})

export default Header
