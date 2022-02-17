import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Badge } from './Badge';

export default {
  title: 'Atoms/Badge',
  component: Badge,
} as Meta;

const Template: Story<ComponentProps<typeof Badge>> = (args) => <Badge {...args} />;

export const White = Template.bind({});
White.args = {
  variant: "WHITE",
  children: "18+",
};

export const Gray = Template.bind({});
Gray.args = {
  variant: "GRAY",
  children: "Adventure",
};
