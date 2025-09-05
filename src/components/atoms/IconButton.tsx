import type * as TYPES from '../../types'
import css from './Button.module.scss'

const IconButton = ({
  size = 'md',
  icon = 'sun',
  loading,
  children,
  className,
  ...rest
}: TYPES.IconButton) => {
  const classList = `${size}${icon ? ` ${css[icon]}` : ''}${
    loading ? ` ${css.loading}` : ''
  }${className ? ` ${className}` : ''}`
  return (
    <button className={classList} {...rest}>
      {children}
    </button>
  )
}

export default IconButton
