import React from 'react';

import Link from 'next/link';
import type { ProjectIdPageNSTypes } from './types';
import { getData } from '../../helpers';
import { ENDPOINTS } from '../../constants';
import type { ServerProjectsNSTypes } from '../../api/projects/types';
import { Carousel } from './Carousel';
import { ButtonBack, Icon } from '../../common';
import styles from './styles.module.scss';

export default async function ProjectId({
  params,
}: ProjectIdPageNSTypes.Props) {
  const response: ServerProjectsNSTypes.Project =
    await getData(`${ENDPOINTS.PROJECTS}/${params.id}`);

  return (
    <div className="sectionContainer">
      <div className={`sectionInner ${styles.inner}`}>
        <ButtonBack />

        <Carousel images={response.images} />

        <h3 className={styles.title}>{response.title}</h3>

        <p className={styles.details}>{response.details}</p>

        <footer className={styles.footer}>
          {response.linkToGitHub && (
            <Link
              className={styles.link}
              href={{
                pathname: response.linkToDemo,
              }}
            >
              <Icon name="open" size={16} color="#fff" />

              <span className={styles.linkText}>
                View site
              </span>
            </Link>
          )}

          {response.linkToGitHub && (
            <Link
              className={styles.link}
              href={{
                pathname: response.linkToGitHub,
              }}
            >
              <Icon name="open" size={16} color="#fff" />

              <span className={styles.linkText}>
                View code
              </span>
            </Link>
          )}
        </footer>
      </div>
    </div>
  );
}
