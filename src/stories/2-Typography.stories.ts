import { ParagraphComponent } from '../app/components/paragraph/paragraph.component';
import { HeadingsComponent } from '../app/components/headings/headings.component';

export default {
  title: 'Typography',
};

export const Headings = () => ({
  component: HeadingsComponent,
  props: {},
});

export const RegularText = () => ({
  component: ParagraphComponent,
  props: {},
});

