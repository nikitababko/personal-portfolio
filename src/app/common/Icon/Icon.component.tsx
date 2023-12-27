import React from 'react';

import type { IconNSTypes } from './Icon.types';
import { useController } from './Icon.controller';

export const Icon: React.FC<IconNSTypes.Props> = ({
  color = 'black',
  name,
  size = 24,
}) => {
  const { icons } = useController(color);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{`${name} svg icon`}</title>

      {icons[name]?.(color)}
    </svg>
  );
};
