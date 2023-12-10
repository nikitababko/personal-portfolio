import type { ValueOf } from 'next/constants';

import type { ENDPOINTS } from './constants';

export const getBaseUrl = () => {
  const { NODE_ENV } = process.env;

  if (NODE_ENV === 'development' || NODE_ENV === 'test') {
    return 'http://localhost:3000/api';
  }

  return 'PRODUCTION_URL';
};

export const getData = async (
  endpoint: ValueOf<keyof typeof ENDPOINTS>,
) => {
  try {
    const response = await fetch(
      `${getBaseUrl()}/${endpoint}`,
    );

    return await response.json();
  } catch (error) {
    console.error(error);

    return null;
  }
};
