import type * as CSS from 'csstype';
import type React from 'react';

import type { ServerSkillsNSTypes } from '../../api/skills/types';

export namespace IconNSTypes {
  export type Color = CSS.Property.Color;

  export type Name =
    | 'download'
    | 'mouse'
    | 'arrowDown'
    | 'chevronLeft'
    | 'open'
    | 'education'
    | 'briefcase'
    | 'sadEmoji'
    | ServerSkillsNSTypes.IconName;

  export type Props = {
    color?: Color;
    size?: number;
    name: Name;
  };

  export type UseController = (color: Color) => {
    icons: Icons;
  };

  export type Icons = Record<
    Name,
    (color: Color) => React.ReactNode
  >;
}
