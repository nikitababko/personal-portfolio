import type { LegacyRef } from 'react';
import React, { useEffect } from 'react';

import styles from './Element.styles.module.scss';
import type { ElementNSTypes } from './Element.types';
import { useController } from './Element.controller';
import type { TabsNSTypes } from '../../Tabs.types';

export const Element = <
  Label extends TabsNSTypes.ExtendLabel,
>({
  labelItem,
  setOffset,
  setSelectedLabel,
  labelWidthClassName,
}: ElementNSTypes.Props<Label>) => {
  const { handleClick, reference } = useController<Label>(
    labelItem,
    setOffset,
    setSelectedLabel,
  );

  useEffect(() => {
    const offsetLeft = reference?.current?.offsetLeft;
    const offsetTop = reference?.current?.offsetTop;
    if (
      labelItem.id === 1 &&
      offsetLeft !== undefined &&
      offsetTop !== undefined
    ) {
      setOffset?.({ offsetLeft, offsetTop });
    }
  }, [labelItem.id, reference, setOffset]);

  return (
    <button
      onClick={handleClick}
      ref={reference as LegacyRef<HTMLButtonElement>}
      type="button"
      className={`${styles.container} ${labelWidthClassName}`}
    >
      {labelItem.value}
    </button>
  );
};
