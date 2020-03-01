import { createStore } from 'nedux';
import { createStoreHook } from 'react-nedux';

export const testStore = createStore({
  counter: 0,
});

export const useTest = createStoreHook(testStore);
