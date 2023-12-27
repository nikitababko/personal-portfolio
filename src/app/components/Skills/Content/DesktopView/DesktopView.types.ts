import type { ServerSkillsNSTypes } from '../../../../api/skills/types';

export namespace DesktopViewNSTypes {
  export type Props = {
    titles: ServerSkillsNSTypes.Title[];
    content: ServerSkillsNSTypes.ContentItem[];
  };

  export type FilterDataByKey = (
    titles: ServerSkillsNSTypes.Title[],
    content: ServerSkillsNSTypes.ContentItem[],
    key: 'frontend' | 'backend',
  ) => {
    header?: ServerSkillsNSTypes.Title;
    elements: ServerSkillsNSTypes.ContentItem[];
  };

  export type UseController = () => {
    filterDataByKey: FilterDataByKey;
  };
}
