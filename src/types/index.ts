import { ButtonHTMLAttributes, HTMLAttributes } from 'react'

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'text'
  size?: 'sm' | 'md' | 'lg'
  shape?: 'square' | 'rounded' | 'circle'
  full?: boolean
  loading?: boolean
}

interface IconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'text'
  size?: 'sm' | 'md' | 'lg'
  icon?: 'sun' | 'moon' | 'top' | 'share'
  loading?: boolean
}

type StackContext = {
  stacks: string[]
  addStack: (item: string) => void
  removeStack: (item: string) => void
}

interface Badge extends HTMLAttributes<HTMLSpanElement> {
  bgColor?: string
  color?: string
  children?: React.ReactNode
}

export type { Button, IconButton, StackContext, Badge }
