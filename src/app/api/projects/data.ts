import { ASSETS_PATH } from '../../constants';
import type { ServerProjectsNSTypes } from './types';

export const projects: ServerProjectsNSTypes.Project[] = [
  {
    id: 'ac4a2087-44ae-60ad-b29f-fed3a02839be',
    title: 'Password generator',
    images: [
      `${ASSETS_PATH}/projects/web-apps/passguard/1.jpg`,
      `${ASSETS_PATH}/projects/web-apps/passguard/2.jpg`,
      `${ASSETS_PATH}/projects/web-apps/passguard/3.jpg`,
    ],
    linkToGitHub:
      'https://github.com/nikitababko/password-generator-app',
    linkToDemo: 'https://passguard.vercel.app',
    details: `
      Introducing PassGuard, the ultimate password generator application designed to keep your online accounts safe and secure. With PassGuard, you can easily create strong and unique passwords that are virtually impossible to crack.
  
      PassGuard offers a user-friendly interface that makes generating passwords a breeze. Simply select your desired password length and customize your preferences, including the inclusion of uppercase letters, lowercase letters, numbers, and special characters. You can even exclude ambiguous or similar-looking characters to enhance password clarity.
  
      The application goes above and beyond to ensure your convenience. PassGuard allows you to generate multiple passwords at once, perfect for those times when you need to update or create passwords for different accounts. Plus, you can easily copy the generated passwords to your clipboard with just a single click.
    `,
    tags: ['all', 'webApp'],
  },
  {
    id: '9f300a30-e453-8412-816e-4d6cfc249a8a',
    title: 'Messenger',
    images: [
      `${ASSETS_PATH}/projects/web-apps/messenger/1.jpg`,
      `${ASSETS_PATH}/projects/web-apps/messenger/2.jpg`,
      `${ASSETS_PATH}/projects/web-apps/messenger/3.jpg`,
    ],
    linkToGitHub:
      'https://github.com/nikitababko/messenger',
    details:
      'This is a service for exchanging instant messages, links, pictures and other information. This messenger is similar to many others, but with its own characteristics. He knows how to attach media files to messages, is anonymous. The correspondence can be diversified with emoticons and voice messages.',
    tags: ['all', 'webApp'],
  },
  {
    id: 'eec25357-5968-66d2-4aa1-52ddce35578f',
    title: 'Tic-tac-toe',
    images: [
      `${ASSETS_PATH}/projects/web-apps/tic-tac-toe/1.jpg`,
      `${ASSETS_PATH}/projects/web-apps/tic-tac-toe/2.jpg`,
    ],
    linkToGitHub:
      'https://github.com/nikitababko/tic-tac-toe',
    linkToDemo:
      'https://nikitababko.github.io/tic-tac-toe/',
    details:
      'Tic-tac-toe - a logical game between two opponents on a square field of 3 by 3 cells or larger (up to an "endless field"). One of the players plays with "crosses", the other - with "noughts".',
    tags: ['all', 'webApp'],
  },
  {
    id: '068b3689-a767-b45a-0cf9-7daabe9f4b14',
    title: 'Arduino store',
    images: [
      `${ASSETS_PATH}/projects/web-apps/arduino-store/1.jpg`,
      `${ASSETS_PATH}/projects/web-apps/arduino-store/2.jpg`,
      `${ASSETS_PATH}/projects/web-apps/arduino-store/3.jpg`,
    ],
    linkToGitHub:
      'https://github.com/nikitababko/arduino-store',
    details:
      "Online store 'Mechatronics' - arduino for studying robotics and prototyping various electronic devices. The assortment of the store is conveniently divided into categories in which you can find and buy almost any goods for a radio amateur - microcontrollers, sensors and sensors, expansion cards, batteries and much more.",
    tags: ['all', 'webApp'],
  },
  {
    id: 'e305f0ba-99e6-6394-1866-19ba6f0d6a87',
    title: 'Todo cloud',
    images: [
      `${ASSETS_PATH}/projects/web-apps/todo-app-todo-cloud/1.jpg`,
      `${ASSETS_PATH}/projects/web-apps/todo-app-todo-cloud/2.jpg`,
      `${ASSETS_PATH}/projects/web-apps/todo-app-todo-cloud/3.jpg`,
    ],
    linkToGitHub:
      'https://github.com/nikitababko/todo-app-todocloud',
    details:
      'Todo Cloud gives you the confidence that everything’s organized and accounted for, so you can make progress on the things that are important to you. Get a clear overview of everything on your plate and never lose track of an important task. Easily organize and prioritize your tasks and projects so you’ll always know exactly what to work on next.',
    tags: ['all', 'webApp'],
  },
  {
    id: '794414ce-513b-6159-a910-541053812038',
    title: 'Social network netlife',
    images: [
      `${ASSETS_PATH}/projects/web-apps/social-network-netlife/1.jpg`,
      `${ASSETS_PATH}/projects/web-apps/social-network-netlife/2.jpg`,
      `${ASSETS_PATH}/projects/web-apps/social-network-netlife/3.jpg`,
    ],
    linkToGitHub:
      'https://github.com/nikitababko/social-network-netlife',
    details:
      'Social network. There is an opportunity to subscribe to someone, share posts (photo, description). There is a completely anonymous chat. In the chat, you can transfer text, photos and emoticons.',
    tags: ['all', 'webApp'],
  },
  {
    id: '20b55e7b-24a6-433d-86f8-20c03f746f72',
    title: 'Landing page active box',
    images: [
      `${ASSETS_PATH}/projects/landings/landing-page-active-box/1.jpg`,
      `${ASSETS_PATH}/projects/landings/landing-page-active-box/2.jpg`,
      `${ASSETS_PATH}/projects/landings/landing-page-active-box/3.jpg`,
    ],
    linkToGitHub:
      'https://github.com/nikitababko/landing-page-active-box',
    linkToDemo:
      'https://nikitababko.github.io/landing-page-active-box/',
    details: 'Landing page',
    tags: ['all', 'landing'],
  },
  {
    id: '1ec144a6-07fa-5c7c-1855-ee7737e47326',
    title: 'Landing page bouncy',
    images: [
      `${ASSETS_PATH}/projects/landings/landing-page-bouncy/1.jpg`,
      `${ASSETS_PATH}/projects/landings/landing-page-bouncy/2.jpg`,
      `${ASSETS_PATH}/projects/landings/landing-page-bouncy/3.jpg`,
    ],
    linkToGitHub:
      'https://github.com/nikitababko/landing-page-bouncy',
    linkToDemo:
      'https://nikitababko.github.io/landing-page-bouncy/',
    details: 'Landing page',
    tags: ['all', 'landing'],
  },
  {
    id: 'e16a50c2-2172-7230-2fae-3761256f8de0',
    title: 'Landing page eclipse',
    images: [
      `${ASSETS_PATH}/projects/landings/landing-page-eclipse/1.jpg`,
      `${ASSETS_PATH}/projects/landings/landing-page-eclipse/2.jpg`,
      `${ASSETS_PATH}/projects/landings/landing-page-eclipse/3.jpg`,
    ],
    linkToGitHub:
      'https://github.com/nikitababko/landing-page-eclipse',
    linkToDemo:
      'https://nikitababko.github.io/landing-page-eclipse/',
    details: 'Landing page',
    tags: ['all', 'landing'],
  },
  {
    id: '5ca7c87e-3d3c-ead4-27ce-5d192e37cbe1',
    title: 'Landing page mogo',
    images: [
      `${ASSETS_PATH}/projects/landings/landing-page-mogo/1.jpg`,
      `${ASSETS_PATH}/projects/landings/landing-page-mogo/2.jpg`,
      `${ASSETS_PATH}/projects/landings/landing-page-mogo/3.jpg`,
    ],
    linkToGitHub:
      'https://github.com/nikitababko/landing-page-mogo',
    linkToDemo:
      'https://nikitababko.github.io/landing-page-mogo/',
    details: 'Landing page',
    tags: ['all', 'landing'],
  },
  {
    id: 'eb7d5701-9719-8866-9fab-b391a18ec3f9',
    title: 'Password generator',
    images: [`${ASSETS_PATH}/projects/libs/npm.jpg`],
    linkToGitHub:
      'https://github.com/nikitababko/password-generator',
    details: 'TODO',
    tags: ['all', 'lib'],
  },
  {
    id: '1453039c-ef73-b726-5392-03d018d52187',
    title: 'ID generator',
    images: [`${ASSETS_PATH}/projects/libs/npm.jpg`],
    linkToGitHub:
      'https://github.com/nikitababko/id-generator',
    details: 'TODO',
    tags: ['all', 'lib'],
  },
  {
    id: '2637f821-8823-b0bd-2b85-7eefe2f6a47f',
    title: 'CSS reset',
    images: [`${ASSETS_PATH}/projects/libs/npm.jpg`],
    linkToGitHub:
      'https://github.com/nikitababko/reset-css',
    details: 'TODO',
    tags: ['all', 'lib'],
  },
  {
    id: '6582fcfd-a045-5b09-a240-2ee5283a9b1e',
    title: 'Portfolio example',
    images: [
      `${ASSETS_PATH}/projects/design/portfolio-example.jpg`,
    ],
    linkToDemo:
      'https://www.behance.net/gallery/108873567/Portfolio-example',
    details: 'TODO',
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
