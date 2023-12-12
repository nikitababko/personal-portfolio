import type * as CSS from 'csstype';
import type React from 'react';

export namespace IconNSTypes {
  export type Color = CSS.Property.Color;

  export type Name =
    | 'download'
    | 'mouse'
    | 'arrowDown'
    | 'chevronLeft';

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
