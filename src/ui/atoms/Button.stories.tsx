import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'click' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: Story<ComponentProps<typeof Button>> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "PRIMARY",
  children: "Primary action",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "SECONDARY",
  children: "Secondary action",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "OUTLINED",
  children: "Outlined action",
};
