import { useRef, useCallback } from 'react'
import ContactPage from './contact/page'
import ResumePage from './resume/page'
import AboutPage from './about/page'
import WorksPage from './works/page'
import { useActiveContent } from '../context/ActiveContents'

export default function MainPage() {
  const tabListRef = useRef<HTMLUListElement | null>(null)
  const { activeContent, setActiveContent } = useActiveContent()

  const TabClick = useCallback((menu: number) => {
    setActiveContent(menu)
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    })
  }, [])

  return (
    <>
      <div className="main-container">
        <div className="navigation-tabs-wrapper">
          <ul className="navigation-tabs" role="tablist" ref={tabListRef}>
            <li
              className={`tab-item tab-resume${
                activeContent === 0 ? ' active' : ''
              }`}
            >
              <button
                role="tab"
                aria-label={
                  activeContent === 0 ? 'Resume 메뉴 활성화' : undefined
                }
                onClick={() => {
                  TabClick(0)
                }}
              >
                <span className="tab-icon resume" />
                <span className="tab-label">Resume</span>
              </button>
            </li>
            <li
              className={`tab-item tab-about${
                activeContent === 1 ? ' active' : ''
              }`}
            >
              <button
                role="tab"
                aria-label={
                  activeContent === 1 ? 'About 메뉴 활성화' : undefined
                }
                onClick={() => {
                  TabClick(1)
                }}
              >
                <span className="tab-icon about" />
                <span className="tab-label">About Me</span>
              </button>
            </li>
            <li
              className={`tab-item tab-works${
                activeContent === 2 ? ' active' : ''
              }`}
            >
              <button
                role="tab"
                aria-label={
                  activeContent === 2 ? 'Works 메뉴 활성화' : undefined
                }
                onClick={() => {
                  TabClick(2)
                }}
              >
                <span className="tab-icon works" />
                <span className="tab-label">Works</span>
              </button>
            </li>
            <li
              className={`tab-item tab-contact${
                activeContent === 3 ? ' active' : ''
              }`}
            >
              <button
                role="tab"
                aria-label={
                  activeContent === 3 ? 'Contact 메뉴 활성화' : undefined
                }
                onClick={() => {
                  TabClick(3)
                }}
              >
                <span className="tab-icon contact" />
                <span className="tab-label">Contact</span>
              </button>
            </li>
          </ul>
        </div>
        <div className="content-area">
          {activeContent === 0 ? (
            <ResumePage />
          ) : activeContent === 1 ? (
            <AboutPage />
          ) : activeContent === 2 ? (
            <WorksPage />
          ) : (
            <ContactPage />
          )}
        </div>
      </div>
    </>
  )
}
