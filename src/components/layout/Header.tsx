import { Link } from 'react-router-dom'
import { useScroll } from '../../context/ScrollContext'
import { useActiveContent } from '../../context/ActiveContents'
import css from './Header.module.scss'
import FloatingMenu from '../organisms/FloatingMenu'

const Header = () => {
  const { scrollY } = useScroll()
  const { setActiveContent } = useActiveContent()

  return (
    <>
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
          <FloatingMenu />
        </div>
      </div>
    </>
  )
}

export default Header
