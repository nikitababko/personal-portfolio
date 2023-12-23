import type { ServerQualificationNSTypes } from './types';

export const titles: ServerQualificationNSTypes.Title[] = [
  {
    id: 1,
    value: 'Work experience',
    tag: 'work',
  },
  {
    id: 2,
    value: 'Education',
    tag: 'education',
  },
];

export const content: ServerQualificationNSTypes.ContentItem[] =
  [
    {
      id: '7b9bae32-cbb7-c748-977b-97166e548237',
      title: 'Fullstack developer',
      place: 'SSUWT',
      date: {
        from: '2017-05-21',
        to: '2021-07-28',
      },
      tags: ['work'],
    },
    {
      id: '1231ec2d-ef6d-ee3c-3a44-3579a34dafd6',
      title: 'Frontend developer',
      place: 'East innovations',
      date: {
        from: '2021-11-22',
        to: new Date(),
      },
      tags: ['work'],
    },
    {
      id: 'd400042a-eba8-88c0-7f15-f81cc9f9d3f1',
      title: "Bachelor's Degree in computer science",
      place: 'SSUWT',
      date: {
        from: '2016-09-01',
        to: '2021-07-01',
      },
      tags: ['education'],
    },
    {
      id: '6f1e9367-3f1c-afbc-6e1b-7a24857683a0',
      title: "Master's Degree in computer science",
      place: 'SSUWT',
      date: {
        from: '2021-09-01',
        to: '2023-07-01',
      },
      tags: ['education'],
    },
  ];
