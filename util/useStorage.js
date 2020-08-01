import { useState } from 'react'

// Adapted respectfully from https://usehooks.com/useLocalStorage/
export default function useStorage(type, key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (!process.browser) return initialValue
    const storage =
      type === 'local' ? window.localStorage : window.sessionStorage
    try {
      const item = storage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      window.logJSError(error)
      return initialValue
    }
  })

  const setValue = value => {
    try {
      if (!process.browser) return
      const storage =
        type === 'local' ? window.localStorage : window.sessionStorage
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      storage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      window.logJSError(error)
    }
  }

  return [storedValue, setValue]
}
