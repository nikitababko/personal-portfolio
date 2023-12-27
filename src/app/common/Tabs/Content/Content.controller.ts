import { useCallback, useEffect, useState } from 'react';

import { useMediaQuery } from '../../../hooks';
import type { TabsNSTypes } from '../Tabs.types';

export const useController = <
  LabelItem extends TabsNSTypes.ExtendLabel,
  ContentItem extends TabsNSTypes.ExtendContentItem,
>(
  selectedLabel: LabelItem,
  data: ContentItem[],
  showMore?: boolean,
) => {
  const [items, setItems] = useState<ContentItem[] | null>(
    null,
  );

  const getSelectedProjects = useCallback(() => {
    return data.filter((element) => {
      return element.tags?.includes(selectedLabel.tag);
    });
  }, [data, selectedLabel.tag]);

  const mediaMin768 = useMediaQuery('(min-width: 768px)');
  const mediaMin992 = useMediaQuery('(min-width: 992px)');

  useEffect(() => {
    if (!showMore) {
      setItems(getSelectedProjects());
    } else if (mediaMin992) {
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      setItems(getSelectedProjects().slice(0, 12));
    } else if (mediaMin768) {
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      setItems(getSelectedProjects().slice(0, 8));
    } else {
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      setItems(getSelectedProjects().slice(0, 6));
    }
  }, [
    getSelectedProjects,
    mediaMin768,
    mediaMin992,
    showMore,
  ]);

  return { items };
};
