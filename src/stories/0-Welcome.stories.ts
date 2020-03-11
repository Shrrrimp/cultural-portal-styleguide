import { WelcomeComponent } from '../app/components/welcome/welcome.component';

export default {
  title: 'Welcome',
  component: WelcomeComponent,
};

export const ToStyleGuide = () => ({
  component: WelcomeComponent,
  props: {},
});

ToStyleGuide.story = {
  name: 'to Styleguide',
};
