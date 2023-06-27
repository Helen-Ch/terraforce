import React, {ButtonHTMLAttributes} from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isPostActive: boolean
}

function ActiveToggleButton({isPostActive, ...rest}: ButtonProps) {
    return (
        <button {...rest}>
            {isPostActive ? 'Deactivate' : '✔ Activate'}
        </button>
    );
}

export default ActiveToggleButton;