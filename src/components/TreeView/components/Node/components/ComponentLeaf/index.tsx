import { Icons } from '../../../../../../icons'
import styles from './styles.module.scss'

type ComponentLeaf = {
    name: string
    isActive: boolean
    onClickComponent: () => void
}

export function ComponentLeaf({
    isActive,
    name,
    onClickComponent,
}: ComponentLeaf) {
    const className = isActive
        ? styles['container-selected']
        : styles['container-not-selected']

    return (
        <div className={className} onClick={onClickComponent}>
            <div className={styles['text-container']}>
                <Icons.Outlined.Component />
                <span>{name}</span>
            </div>
        </div>
    )
}
