import type { ServerSkillsNSTypes } from '../../../../api/skills/types';

export namespace ItemNSTypes {
  export type Props = {
    title: ServerSkillsNSTypes.ContentItem['title'];
    iconName: ServerSkillsNSTypes.ContentItem['iconName'];
  };
}
