import { ASSETS_PATH } from '../../constants';
import type { ServerProjectsNSTypes } from './types';

export const projects: ServerProjectsNSTypes.Project[] = [
  {
    id: '9f300a30-e453-8412-816e-4d6cfc249a8a',
    title: 'Messenger',
    src: `${ASSETS_PATH}/projects/web-apps/messenger.jpg`,
    alt: 'Messenger',
    link: 'https://github.com/nikitababko/messenger',
    details: 'Hello world',
    tags: ['all', 'webApp'],
  },
  {
    id: 'eec25357-5968-66d2-4aa1-52ddce35578f',
    title: 'Tic-tac-toe',
    src: `${ASSETS_PATH}/projects/web-apps/tic-tac-toe.jpg`,
    alt: 'Tic-tac-toe',
    link: 'https://github.com/nikitababko/tic-tac-toe',
    details: 'Hello world',
    tags: ['all', 'webApp'],
  },
  {
    id: '068b3689-a767-b45a-0cf9-7daabe9f4b14',
    title: 'Arduino store',
    src: `${ASSETS_PATH}/projects/web-apps/arduino-store.jpg`,
    alt: 'Arduino store',
    link: 'https://github.com/nikitababko/arduino-store',
    details: 'Hello world',
    tags: ['all', 'webApp'],
  },
  {
    id: 'e305f0ba-99e6-6394-1866-19ba6f0d6a87',
    title: 'Todo cloud',
    src: `${ASSETS_PATH}/projects/web-apps/todo-app-todo-cloud.jpg`,
    alt: 'Todo cloud',
    link: 'https://github.com/nikitababko/todo-app-todocloud',
    details: 'Hello world',
    tags: ['all', 'webApp'],
  },
  {
    id: '794414ce-513b-6159-a910-541053812038',
    title: 'Social network netlife',
    src: `${ASSETS_PATH}/projects/web-apps/social-network-netlife.jpg`,
    alt: 'Social network netlife',
    link: 'https://github.com/nikitababko/social-network-netlife',
    details: 'Hello world',
    tags: ['all', 'webApp'],
  },
  {
    id: '20b55e7b-24a6-433d-86f8-20c03f746f72',
    title: 'Landing page active box',
    src: `${ASSETS_PATH}/projects/landings/landing-page-active-box.jpg`,
    alt: 'Landing page active box',
    link: 'https://github.com/nikitababko/landing-page-active-box',
    details: 'Hello world',
    tags: ['all', 'landing'],
  },
  {
    id: '1ec144a6-07fa-5c7c-1855-ee7737e47326',
    title: 'Landing page bouncy',
    src: `${ASSETS_PATH}/projects/landings/landing-page-bouncy.jpg`,
    alt: 'Landing page active box',
    link: 'https://github.com/nikitababko/landing-page-bouncy',
    details: 'Hello world',
    tags: ['all', 'landing'],
  },
  {
    id: 'e16a50c2-2172-7230-2fae-3761256f8de0',
    title: 'Landing page eclipse',
    src: `${ASSETS_PATH}/projects/landings/landing-page-eclipse.jpg`,
    alt: 'Landing page active box',
    link: 'https://github.com/nikitababko/landing-page-eclipse',
    details: 'Hello world',
    tags: ['all', 'landing'],
  },
  {
    id: '5ca7c87e-3d3c-ead4-27ce-5d192e37cbe1',
    title: 'Landing page mogo',
    src: `${ASSETS_PATH}/projects/landings/landing-page-mogo.jpg`,
    alt: 'Landing page active box',
    link: 'https://github.com/nikitababko/landing-page-mogo',
    details: 'Hello world',
    tags: ['all', 'landing'],
  },
  {
    id: 'ac4a2087-44ae-60ad-b29f-fed3a02839be',
    title: 'Password generator',
    src: `${ASSETS_PATH}/projects/web-apps/passguard.jpg`,
    alt: 'Landing page active box',
    link: 'https://passguard.vercel.app',
    details: 'Hello world',
    tags: ['all', 'webApp'],
  },
  {
    id: 'eb7d5701-9719-8866-9fab-b391a18ec3f9',
    title: 'Password generator',
    src: `${ASSETS_PATH}/projects/libs/npm.jpg`,
    alt: 'Password generator',
    link: 'https://github.com/nikitababko/password-generator',
    details: 'Hello world',
    tags: ['all', 'lib'],
  },
  {
    id: '1453039c-ef73-b726-5392-03d018d52187',
    title: 'ID generator',
    src: `${ASSETS_PATH}/projects/libs/npm.jpg`,
    alt: 'ID generator',
    link: 'https://github.com/nikitababko/id-generator',
    details: 'Hello world',
    tags: ['all', 'lib'],
  },
  {
    id: '2637f821-8823-b0bd-2b85-7eefe2f6a47f',
    title: 'CSS reset',
    src: `${ASSETS_PATH}/projects/libs/npm.jpg`,
    alt: 'CSS reset',
    link: 'https://github.com/nikitababko/reset-css',
    details: 'Hello world',
    tags: ['all', 'lib'],
  },
  {
    id: '6582fcfd-a045-5b09-a240-2ee5283a9b1e',
    title: 'Portfolio example',
    src: `${ASSETS_PATH}/projects/design/portfolio-example.jpg`,
    alt: 'Portfolio example',
    link: 'https://www.behance.net/gallery/108873567/Portfolio-example',
    details: 'Hello world',
    tags: ['all', 'design'],
  },
];

export const filters: ServerProjectsNSTypes.Filter[] = [
  {
    id: 1,
    value: 'All',
    tag: 'all',
  },
  {
    id: 2,
    value: 'Web app',
    tag: 'webApp',
  },
  {
    id: 3,
    value: 'Landings',
    tag: 'landing',
  },
  {
    id: 4,
    value: 'Libs',
    tag: 'lib',
  },
  {
    id: 5,
    value: 'Design',
    tag: 'design',
  },
];