import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'
import { Text } from '../Text'

export const TooltipContainer = styled(Tooltip.Provider, {})
export const TooltipRoot = styled(Tooltip.Root, {})
export const TooltipTrigger = styled(Tooltip.Trigger, {})
export const TooltipPortal = styled(Tooltip.Portal, {})
export const TooltipContent = styled(Tooltip.Content, {
  borderRadius: 5,
  padding: '5px 15px',
  fontSize: 14,
  backgroundColor: '$gray900',
})
export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
export const TooltipText = styled(Text, {
  color: '$gray100',
})
