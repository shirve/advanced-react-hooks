import { useState } from 'react'
import { TaskViewModel } from '../models/Task'

const useLocalStorage = (
  key: string,
  initialValue: string | TaskViewModel[]
) => {
  const [localStorageValue, setlocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  )

  const setValue = (value: any) => {
    // check if function
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value
    // set to state
    setlocalStorageValue(value)
    // set to local storage
    localStorage.setItem(key, JSON.stringify(valueToStore))
  }

  return [localStorageValue, setValue]
}

const getLocalStorageValue = (
  key: string,
  initialValue: string | TaskViewModel[]
) => {
  const itemFromStorage = localStorage.getItem(key)
  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue
}

export default useLocalStorage
