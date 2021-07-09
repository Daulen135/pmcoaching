import React from 'react'
import { Redirect } from 'react-router-dom'
import AuthService from '../services/auth.service'

export default function LoggedLayout({ children }) {

  const user = AuthService.getCurrentUser()

  if (user===null) return <Redirect to="/login" />

  return (
    <>
      {children}
    </>
  )
}
