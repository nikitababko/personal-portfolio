import type { ServerAboutNSTypes } from './types';
import { ASSETS_PATH } from '../../constants';

export const description: ServerAboutNSTypes.Paragraph[] = [
  {
    id: 1,
    value: `I am a well-organized person and a quick
              learner. I am a results-oriented and
              detail-oriented software developer with
              experience in front-end, full-stack web
              development and extensive experience designing
              and implementing scalable and efficient
              solutions.`,
  },
  {
    id: 2,
    value: `I have a broad technical outlook, I am
              familiar with react, react native, angular,
              vue, electron, etc. Ready to think outside the
              box. Able to collaborate with cross-functional
              teams to analyze requirements, develop
              innovative solutions, and ensure delivery of
              high-quality software products. I have the
              skills to troubleshoot complex problems and
              optimize code to improve performance. I meet
              project deadlines and create reliable and
              user-friendly applications. I strive to keep
              abreast of new technologies and constantly
              improve my skills to contribute to
              cutting-edge projects.`,
  },
];

export const cards: ServerAboutNSTypes.Card[] = [
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
