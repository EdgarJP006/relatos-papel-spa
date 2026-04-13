import { useEffect, useState } from 'react'

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key)

    if (item) {
      return JSON.parse(item)
    }

    return initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue))
  }, [key, storedValue])

  return [storedValue, setStoredValue]
}

export default useLocalStorage