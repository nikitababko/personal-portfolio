import type React from 'react';
import type { ServerProjectsNSTypes } from '../../../api/projects/types';

export namespace ContentNSTypes {
  export type Props<LabelItem, ContentItem> = {
    selectedLabel: LabelItem;
    data: ContentItem[];
    showMore?: boolean;
    renderContent: (
      content: ContentItem & { index: number },
    ) => React.ReactNode;
    contentContainerStylesClassName?: string;
    contentContentStylesClassName?: string;
  };

  export type UseController<ContentItem> = (
    selectedFilter: ServerProjectsNSTypes.Filter,
    data: ContentItem[],
    isPage?: boolean,
  ) => { items: ContentItem[] };
}
