import { Box, BoxProps, Text } from '@ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
        <Text>Testing box element</Text>
      </>
    ),
  },
} as Meta

export const Primary: StoryObj<BoxProps> = {}
export const Big: StoryObj<BoxProps> = {}
