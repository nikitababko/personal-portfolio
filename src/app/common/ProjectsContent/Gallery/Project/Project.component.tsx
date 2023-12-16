import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Project.styles.module.scss';
import type { GalleryProjectNSTypes } from './Project.types';
import { ENDPOINTS } from '../../../../constants';

export const Project: React.FC<
  GalleryProjectNSTypes.Props
> = ({ project }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={project.images[0]}
          alt="TODO: add alt"
          fill
        />
      </div>

      <p className={styles.title}>{project.title}</p>

      <Link
        className={styles.more}
        href={{
          pathname: `/${ENDPOINTS.PROJECTS}/${project.id}`,
        }}
      >
        More
      </Link>
    </div>
  );
};
