import { useState } from 'react';

import usePersistedState from './usePersistedState';
import createStorage from './createStorage';

export default (key, provider = global.localStorage) => {
  if (provider) {
    const storage = createStorage(provider);
    return initialState => usePersistedState(initialState, key, storage);
  }

  return useState;
};
