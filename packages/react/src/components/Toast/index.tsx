import { ToastDescription, ToastTitle } from '@radix-ui/react-toast'
import { ComponentProps } from 'react'
import {
  ToastClose,
  ToastCloseIcon,
  ToastHeading,
  ToastProvider,
  ToastRoot,
  ToastText,
  ToastViewport,
} from './styles'
import * as ToastPrimitive from '@radix-ui/react-toast'

export type ToastProps = ComponentProps<typeof ToastPrimitive.Root> & {
  title: string
  description?: string
}

export function Toast({ title, description, ...rest }: ToastProps) {
  return (
    <ToastProvider swipeDirection="right">
      <ToastRoot {...rest}>
        <ToastTitle>
          <ToastHeading>{title}</ToastHeading>
        </ToastTitle>
        {description && (
          <ToastDescription asChild>
            <ToastText>{description}</ToastText>
          </ToastDescription>
        )}
        <ToastClose>
          <ToastCloseIcon width={20} weight={'light'} />
        </ToastClose>
      </ToastRoot>
      <ToastViewport className="ToastViewport" />
    </ToastProvider>
  )
}
