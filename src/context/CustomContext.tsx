import { useState, createContext } from 'react'

interface ICustomContext {
  contextText: string
  setContextText: React.Dispatch<React.SetStateAction<string>>
}

const CustomContext = createContext({} as ICustomContext)

export const CustomContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [contextText, setContextText] = useState('')

  return (
    <CustomContext.Provider value={{ contextText, setContextText }}>
      {children}
    </CustomContext.Provider>
  )
}

export default CustomContext
