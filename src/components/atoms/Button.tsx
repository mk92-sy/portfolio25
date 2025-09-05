import type * as TYPES from '../../types'
import css from './Button.module.scss'

const Button = ({
  size = 'md',
  shape = 'square',
  full,
  loading,
  children,
  className,
  ...rest
}: TYPES.Button) => {
  const classList = `${size}${shape ? ` ${css.shape}` : ''}${
    full ? ` ${css.full}` : ''
  }${loading ? ` ${css.loading}` : ''}${className ? ` ${className}` : ''}`
  return (
    <button className={classList} {...rest}>
      {children}
    </button>
  )
}

export default Button
