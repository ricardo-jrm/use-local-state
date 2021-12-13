import { Dispatch, SetStateAction, useState, useEffect } from 'react';

/**
 * State hook that syncs with local storage
 */
export const useLocalState = <T>(
  id: string,
  initialValue: T,
): [T, Dispatch<SetStateAction<T>>] => {
  // init
  const [state, stateSet] = useState<T>(initialValue);

  // load local storage on mount
  useEffect(() => {
    const loaded = localStorage?.getItem(id);
    if (loaded) {
      const parsed = JSON.parse(loaded);
      stateSet(parsed);
    }
  }, [id]);

  // sync
  useEffect(() => {
    localStorage?.setItem(id, JSON.stringify(state));
  }, [state, id]);

  // return
  return [state, stateSet];
};
