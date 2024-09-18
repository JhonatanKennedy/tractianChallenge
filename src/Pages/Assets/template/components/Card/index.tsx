import { DetailedHTMLProps, HTMLAttributes } from 'react'
import style from './styles.module.scss'

type CardProps = Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    'className'
>
export function Card(props: CardProps) {
    return <div {...props} className={style.card} />
}
