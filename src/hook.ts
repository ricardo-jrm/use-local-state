import { Dispatch, SetStateAction, useState } from 'react';

/**
 * useExampleHook
 */
export const useExampleHook = <T>(
  initialValue: T,
): [T, Dispatch<SetStateAction<T>>] => {
  const [state, stateSet] = useState<T>(initialValue);
  return [state, stateSet];
};
