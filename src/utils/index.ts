import { useRef, useEffect } from 'react';

export function usePrevious<T>(val: T) {
  const refVal = useRef<T>();

  useEffect(() => {
    refVal.current = val;
  });

  return refVal.current;
}
