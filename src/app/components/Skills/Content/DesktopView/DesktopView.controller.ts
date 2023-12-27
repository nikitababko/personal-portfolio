import { useCallback } from 'react';

import type { DesktopViewNSTypes } from './DesktopView.types';

export const useController: DesktopViewNSTypes.UseController =
  () => {
    const filterDataByKey: DesktopViewNSTypes.FilterDataByKey =
      useCallback((titles, content, key) => {
        const frontendArray = content.filter(
          (contentItem) => {
            return contentItem.tags.includes(key);
          },
        );

        const header = titles
          .filter((title) => title.tag === key)
          .at(0);

        return {
          header,
          elements: frontendArray,
        };
      }, []);

    return { filterDataByKey };
  };
