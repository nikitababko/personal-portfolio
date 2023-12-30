import type { ServerSkillsNSTypes } from '../../../../api/skills/types';

export namespace SkillsMobileViewNSTypes {
  export type Props = {
    titles: ServerSkillsNSTypes.Title[];
    content: ServerSkillsNSTypes.ContentItem[];
  };
}
