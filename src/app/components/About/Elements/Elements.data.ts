import type { ElementsNSTypes } from './Elements.types';
import { ASSETS_PATH } from '../../../constants';

export const elements: ElementsNSTypes.Element[] = [
  {
    id: 1,
    src: `${ASSETS_PATH}/about/responsive-design.png`,
    text: `My layouts will work on any device, big or small`,
    alt: 'Responsive design icon',
  },
  {
    id: 2,
    src: `${ASSETS_PATH}/about/fast.png`,
    text: `Fast load times and lag free interaction, my highest priority`,
    alt: 'Performance icon',
  },
  {
    id: 3,
    src: `${ASSETS_PATH}/about/light-bulb.png`,
    text: `Strong preference for easy to use, intuitive UX/UI`,
    alt: 'Light bulb icon',
  },
  {
    id: 4,
    src: `${ASSETS_PATH}/about/success.png`,
    text: `Websites don't have to be static, I love making pages come to life`,
    alt: 'Success icon',
  },
];
