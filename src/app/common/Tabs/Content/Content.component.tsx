import React from 'react';
import Link from 'next/link';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import type { ContentNSTypes } from './Content.types';
import { useController } from './Content.controller';
import styles from './Content.styles.module.scss';
import { ENDPOINTS } from '../../../constants';
import type { TabsNSTypes } from '../Tabs.types';

export const Content = <
  LabelItem extends TabsNSTypes.ExtendLabel,
  ContentItem extends TabsNSTypes.ExtendContentItem,
>({
  selectedLabel,
  data,
  showMore,
  renderContent,
  contentContainerStylesClassName,
}: ContentNSTypes.Props<LabelItem, ContentItem>) => {
  const { items } = useController(
    selectedLabel,
    data,
    showMore,
  ) as ReturnType<
    ContentNSTypes.UseController<ContentItem>
  >;

  if (!items) {
    return null;
  }

  return (
    <div
      className={`${styles.container} ${contentContainerStylesClassName}`}
    >
      <TransitionGroup
        component="div"
        className={styles.content}
      >
        {items.map((project, index) => (
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
            // unmountOnExit
            // mountOnEnter
          >
            {renderContent({ ...project, index })}
          </CSSTransition>
        ))}
      </TransitionGroup>

      {showMore && (
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
