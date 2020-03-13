import { GalleryComponent } from '../app/components/gallery/gallery.component';
import { moduleMetadata } from '@storybook/angular';
import {CarouselModule} from 'angular-bootstrap-md';

export default {
  title: 'Gallery',
  component: GalleryComponent,
  decorators: [
    moduleMetadata({
      imports: [CarouselModule],
    }),
  ],
};

export const Gallery = () => ({
  component: GalleryComponent,
  props: {},
});



