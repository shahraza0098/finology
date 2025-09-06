'use client'

import { createContext, useContext, useState } from 'react'

const BusinessFormContext = createContext(null)

export function BusinessFormContextProvider({ children }) {
  const [form, setForm] = useState({})

  const updateForm = (values) => {
    setForm((prev) => ({ ...prev, ...values }))
  }

  return (
    <BusinessFormContext.Provider value={{  form, updateForm }}>
      {children}
    </BusinessFormContext.Provider>
  )
}

export const useBusinessForm = () => {
  const context = useContext(BusinessFormContext)
  if (!context) {
    throw new Error('useBusinessForm must be used within BusinessFormContextProvider')
  }
  return context
}
