import { useState } from 'react';

import type { NavBarNSTypes } from './NavBar.types';

export const useController: NavBarNSTypes.UseController =
  () => {
    const [
      isOpenMobileNavigation,
      setIsOpenMobileNavigation,
    ] = useState<boolean>(false);

    const switchNavigation = () => {
      setIsOpenMobileNavigation(
        (previousState) => !previousState,
      );
    };

    return {
      isOpenMobileNavigation,
      switchNavigation,
    };
  };
