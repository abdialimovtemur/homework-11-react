import React from 'react'
import { SecondaryButton as StyledSecondaryButton } from './style'

export const SecondaryButton = ({ children, onClick, type = "button" }) => {
  return (
    <StyledSecondaryButton type={type} onClick={onClick}>
      {children}
    </StyledSecondaryButton>  
  )
}
