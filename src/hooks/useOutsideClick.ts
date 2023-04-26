import React, {
  Ref,
  useState,
  useRef,
  useEffect,
  MutableRefObject,
  ReactNode,
  ReactEventHandler,
} from 'react'

export function useOutsideClick(callback: () => void) {
  const ref = useRef() as any

  useEffect(() => {
    const handleClick = (event: any) => {
      if (ref?.current && !ref.current.contains(event?.target)) {
        callback()
      }
    }
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return ref
}
