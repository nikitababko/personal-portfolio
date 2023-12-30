import type { ServerSkillsNSTypes } from '../../../../api/skills/types';

export namespace SkillsDesktopViewNSTypes {
  export type Props = {
    titles: ServerSkillsNSTypes.Title[];
    content: ServerSkillsNSTypes.ContentItem[];
  };
}
