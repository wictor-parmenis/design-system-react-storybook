import React, { ComponentProps } from 'react'
import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'
import { User } from 'phosphor-react'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export const Avatar: React.FC = (props: AvatarProps) => {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />
      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}
