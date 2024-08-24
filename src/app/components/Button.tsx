import React, { Children } from "react"

interface Prop {
  disabled?: boolean,
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'],
  className?: string,
  children: React.ReactNode,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}


const Button = ({children, disabled, onClick, type, className}: Prop) => {

  const btnStyles = `w-full font-semibold py-3 px-3 rounded ${className}`

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={btnStyles}
    >
      {children}
    </button>
  )
}

export default Button