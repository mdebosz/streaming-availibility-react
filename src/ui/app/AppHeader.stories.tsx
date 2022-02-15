import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { AppHeader } from './AppHeader';
import { BrowserRouter, Router } from 'react-router-dom';

export default {
  title: 'App/AppHeader',
  component: AppHeader,
} as Meta;

const Template: Story<ComponentProps<typeof AppHeader>> = (args) => 
<BrowserRouter ><AppHeader {...args} /></BrowserRouter>;

export const AppDefaultHeader = Template.bind({});
