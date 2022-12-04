import { keyframes, styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'
import { Text } from '../Text'
import { Heading } from '../Heading'
import { X } from 'phosphor-react'

export const ToastProvider = styled(Toast.Provider, {})

const VIEWPORT_PADDING = 32

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const ToastRoot = styled(Toast.Root, {
  padding: '$3 $4',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  fontFamily: '$default',
  position: 'relative',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },
})

export const ToastTitle = styled(Toast.Title, {
  lineHeight: '$base',
  fontWeight: 'bold',
  color: '$white',
  fontSize: '$xl',
})
export const ToastDescription = styled(Toast.Description, {
  lineHeight: '$base',
  fontWeight: 'bold',
  color: '$gray200',
  fontSize: '$xl',
})
export const ToastText = styled(Text, {
  color: '$gray200',
})

export const ToastClose = styled(Text, {
  position: 'absolute',
  top: '$4',
  right: '$4',
  backgroundColor: 'none',
  border: 'none',
  color: '$gray200',
  cursor: 'pointer',
})

export const ToastHeading = styled(Heading, {
  color: '$white',
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

export const ToastCloseIcon = styled(X, {
  color: '$gray200',
})
