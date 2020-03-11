import { Button } from '@storybook/angular/demo';
import { ButtonColoredComponent } from '../app/components/button-colored/button-colored.component';
import { ButtonOutlinedDarkComponent } from '../app/components/button-outlined-dark/button-outlined-dark.component';

export default {
  title: 'Buttons',
  component: Button,
};

export const ButtonColored = () => ({
  component: ButtonColoredComponent,
  props: {},
});

export const ButtonOutlined = () => ({
  component: ButtonOutlinedDarkComponent,
  props: {},
});
