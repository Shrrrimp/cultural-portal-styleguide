import { TimelineComponent } from '../app/components/timeline/timeline.component';
import {AnimateOnScrollModule} from 'ng2-animate-on-scroll';
import {ScrollService} from 'ng2-animate-on-scroll';
import { moduleMetadata } from '@storybook/angular';
import { storiesOf } from '@storybook/angular';

export default {
  title: 'Timeline',
  component: TimelineComponent,
  decorators: [
    moduleMetadata({
      imports: [AnimateOnScrollModule],
      providers: [ScrollService]
    }),
  ],
};

export const Timeline = () => ({
  component: TimelineComponent,
  props: {},
});



