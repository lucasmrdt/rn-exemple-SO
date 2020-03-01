import { testStore } from './test.store'

export const incrementCount = () => testStore.set('counter', prev => prev + 1);
export const decrementCount = () => testStore.set('counter', prev => prev - 1);