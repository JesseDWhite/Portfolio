import { useState, useEffect } from 'react';

export const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false)
  const [currentComp, setCurrentComp] = useState('');

  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  )


  useEffect(() => {
    observer.observe(ref.current)
    setCurrentComp(ref.current.id)
    return () => { observer.disconnect() }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return currentComp && isIntersecting;
}