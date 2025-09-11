import { useEffect, useRef } from 'react'
import { useDialogStore } from '../../store/dialogStore'
import css from './Dialog.module.scss'
import { useFocusableElements } from '../../hooks/useFocusableElements'

const Dialog = () => {
  const { getFocusableElements } = useFocusableElements()
  const {
    isOpen,
    type,
    title,
    message,
    confirmText,
    cancelText,
    onConfirm,
    closeDialog,
  } = useDialogStore()

  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const appRoot = document.getElementById('Contents') // 외부 콘텐츠 영역

    if (isOpen) {
      document.documentElement.style.overflow = 'hidden'
      dialogRef.current?.focus()

      // 외부 콘텐츠 inert 처리
      if (appRoot) {
        appRoot.setAttribute('inert', 'true')
      }

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          closeDialog()
        }

        if (e.key === 'Tab') {
          const focusableEls = getFocusableElements(dialogRef.current)
          if (focusableEls.length === 0) return

          const firstEl = focusableEls[0]
          const lastEl = focusableEls[focusableEls.length - 1]

          if (e.shiftKey) {
            if (document.activeElement === firstEl) {
              e.preventDefault()
              lastEl.focus()
            }
          } else {
            if (document.activeElement === lastEl) {
              e.preventDefault()
              firstEl.focus()
            }
          }
        }
      }

      document.addEventListener('keydown', handleKeyDown)
      return () => {
        // inert 해제F
        if (appRoot) {
          appRoot.removeAttribute('inert')
        }
        document.documentElement.style.overflow = ''
        document.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [isOpen, closeDialog])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-desc"
      className={`${css['dialog-backdrop']} ${isOpen ? css['open'] : ''}`}
      ref={dialogRef}
    >
      <div tabIndex={0} className={css['dialog-content']}>
        <h2 className={css['dialog-title']}>{title}</h2>
        <p className={css['dialog-desc']}>{message}</p>
        <div className={css['dialog-btn-area']}>
          {type === 'confirm' && (
            <button
              className={css['cancel-btn']}
              autoFocus
              onClick={closeDialog}
            >
              {cancelText}
            </button>
          )}
          <button
            className={css['confirm-btn']}
            onClick={() => {
              onConfirm?.()
              closeDialog()
            }}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dialog
