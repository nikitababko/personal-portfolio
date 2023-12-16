'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import {
  A11y,
  EffectCards,
  Navigation,
  Pagination,
} from 'swiper/modules';

import styles from './Carousel.styles.module.scss';
import { useMediaQuery } from '../../../hooks';
import type { CarouselNSTypes } from './Carousel.types';

export const Carousel: React.FC<CarouselNSTypes.Props> = ({
  images,
}) => {
  const mediaMin768 = useMediaQuery('(min-width: 768px)');

  return (
    <Swiper
      style={
        {
          '--swiper-pagination-color': '#323bac',
          '--swiper-navigation-color': '#323bac',
          '--swiper-navigation-sides-offset': '-100px',
        } as React.CSSProperties
      }
      className={styles.container}
      modules={[Navigation, Pagination, A11y, EffectCards]}
      effect={mediaMin768 ? 'cards' : ''}
      slidesPerView={1}
      navigation={mediaMin768}
      pagination={{ clickable: false }}
    >
      {images.map((image) => (
        <SwiperSlide key={image} className={styles.slide}>
          {/* TODO: add alt */}
          <Image src={image} alt="ASD" fill />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
