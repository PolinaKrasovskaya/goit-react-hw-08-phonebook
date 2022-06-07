import { lazy } from 'react';

export const createAsyncView = componentName => {
  return lazy(() =>
  import(`../views/${componentName}`).then(module => ({
    default: module,
  }))
)
};