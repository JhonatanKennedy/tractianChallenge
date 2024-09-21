import { ChangeEvent, ReactNode } from 'react'
import styles from './styles.module.scss'

type InputTextProps = {
    value: string
    onChange: (value: string) => void
    placeholder?: string
    endIcon?: ReactNode
}

export function InputText({
    value,
    onChange,
    placeholder,
    endIcon,
}: InputTextProps) {
    function handleChange(value: ChangeEvent<HTMLInputElement>) {
        onChange(value.target.value)
    }

    return (
        <div className={styles.container}>
            <input
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                type="text"
            />
            <div className={styles['icon-container-end']}>{endIcon}</div>
        </div>
    )
}
