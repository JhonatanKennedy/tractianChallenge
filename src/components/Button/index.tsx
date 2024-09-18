import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'
import styles from './styles.module.scss'

type ButtonProps = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    isSelected?: boolean
    leftIcon?: ReactNode
    color?: 'primary' | 'secondary'
    size?: 'small' | 'medium'
}

export function Button({
    isSelected,
    leftIcon,
    children,
    color = 'primary',
    size = 'medium',
    ...rest
}: ButtonProps) {
    const classNotSelected = styles[`button-${color}-${size}`]
    const classSelected = styles[`button-selected-${size}`]

    const finalClass = isSelected ? classSelected : classNotSelected

    return (
        <button {...rest} className={finalClass}>
            {leftIcon ? leftIcon : null}
            {children}
        </button>
    )
}
