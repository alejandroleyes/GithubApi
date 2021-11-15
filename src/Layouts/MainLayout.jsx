import React from "react"
import Header from "../components/Custom/Header/Header"

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
