import React, { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

function DeleteButton({ ...rest }: ButtonProps) {
    return <button {...rest}>Delete</button>
}

export default DeleteButton;