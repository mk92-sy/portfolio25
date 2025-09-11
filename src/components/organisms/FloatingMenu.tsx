import DarkModeButton from '../molecules/DarkModeButton'
import ShareButton from '../molecules/ShareButton'

const FloatingMenu = () => {
  return (
    <div className="floating-menu">
      <div className={`menu-dropdown`}>
        <DarkModeButton />
        <ShareButton />
      </div>
    </div>
  )
}

export default FloatingMenu
