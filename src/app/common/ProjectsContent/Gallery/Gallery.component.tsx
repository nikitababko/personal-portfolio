'use client';

import React from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import Link from 'next/link';
import type { GalleryNSTypes } from './Gallery.types';
import { useController } from './Gallery.controller';
import styles from './Gallery.styles.module.scss';
import { Project } from './Project';
import { ENDPOINTS } from '../../../constants';

export const Gallery: React.FC<GalleryNSTypes.Props> = ({
  selectedFilter,
  data,
  isPage,
}) => {
  const { projects } = useController(
    selectedFilter,
    data,
    isPage,
  );

  if (!projects) {
    return null;
  }

  return (
    <div className={styles.container}>
      <TransitionGroup
        component="div"
        className={styles.content}
      >
        {projects.map((project) => (
          <CSSTransition
            key={project.id}
            classNames={{
              enterActive: styles.transitionEnterActive,
              enter: styles.transitionEnter,
              exitActive: styles.transitionExitActive,
              exitDone: styles.transitionExit,
            }}
            timeout={{
              enter: 300,
              exit: 300,
            }}
            unmountOnExit
            mountOnEnter
          >
            <Project key={project.id} project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>

      {!isPage && (
        <Link
          className={styles.showMore}
          href={ENDPOINTS.PROJECTS}
        >
          Show more
        </Link>
      )}
    </div>
  );
};
