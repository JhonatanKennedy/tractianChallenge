import { Icons } from '../../../../../../icons'
import styles from './styles.module.scss'

type LocationLeafProps = {
    name: string
    isActive: boolean
    hasChildren: boolean
    onClickLocation: () => void
}

export function LocationLeaf({
    isActive,
    name,
    hasChildren,
    onClickLocation,
}: LocationLeafProps) {
    return (
        <div className={styles.container} onClick={onClickLocation}>
            {hasChildren ? (
                <div className={styles['chevron-container']}>
                    {isActive ? (
                        <Icons.Outlined.ChevronDown />
                    ) : (
                        <Icons.Outlined.ChevronUp />
                    )}
                </div>
            ) : null}

            <div className={styles['text-container']}>
                <Icons.Outlined.Location />
                <span>{name}</span>
            </div>
        </div>
    )
}
