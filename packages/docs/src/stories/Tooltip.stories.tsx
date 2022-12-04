import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps, Button, Box } from '@wictor-parmenis/react'

export default {
  title: 'Alerts/Tooltip',
  component: Tooltip,
  args: {
    text: 'Informando...',
    children: <Button>Click</Button>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story: any) => {
      return (
        <Box
          css={{
            padding: '$20',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '$gray200',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
