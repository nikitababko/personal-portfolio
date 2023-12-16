'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import styles from './ButtonBack.module.scss';
import { Icon } from '../Icon';

export const ButtonBack: React.FC = () => {
  const router = useRouter();

  return (
    <button
      className={styles.container}
      onClick={() => router.back()}
    >
      <Icon name="chevronLeft" color="#323bac" />
      Back
    </button>
  );
};
