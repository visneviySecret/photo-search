import { useState } from 'react'

export function usePrevious(value: string) {
  const [tuple, setTuple] = useState(['', value])

  if (tuple[1] !== value) {
    setTuple([tuple[1], value])
  }
  return tuple[0]
}
