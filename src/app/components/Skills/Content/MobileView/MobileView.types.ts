import type { ServerSkillsNSTypes } from '../../../../api/skills/types';

export namespace MobileViewNSTypes {
  export type Props = {
    titles: ServerSkillsNSTypes.Title[];
    content: ServerSkillsNSTypes.ContentItem[];
  };
}
