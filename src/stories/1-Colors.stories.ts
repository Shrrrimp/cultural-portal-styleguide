import { ColorsComponent } from '../app/components/colors/colors.component';

export default {
  title: 'Colors',
  component: ColorsComponent,
};

export const ToColors = () => ({
  component: ColorsComponent,
  props: {},
});

ToColors.story = {
  name: 'Colors',
};
