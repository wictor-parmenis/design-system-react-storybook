import React, { ComponentProps, ReactNode } from 'react'
import {
  TooltipArrow,
  TooltipContainer,
  TooltipContent,
  TooltipPortal,
  TooltipRoot,
  TooltipText,
  TooltipTrigger,
} from './styles'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

export type TooltipProps = ComponentProps<typeof TooltipPrimitive.Root> & {
  children: ReactNode
  text: string
}

export function Tooltip({ children, text, ...rest }: TooltipProps) {
  return (
    <TooltipContainer>
      <TooltipRoot {...rest}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent side="top" className="TooltipContent" sideOffset={5}>
            <TooltipArrow className="TooltipArrow" />
            <TooltipText>{text}</TooltipText>
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'
