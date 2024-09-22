import { Icons } from '../../../../../../icons'
import styles from './styles.module.scss'

type AssetLeafProps = {
    name: string
    isActive: boolean
    hasChildren: boolean
    onClickAsset: () => void
}

export function AssetLeaf({
    isActive,
    name,
    hasChildren,
    onClickAsset,
}: AssetLeafProps) {
    return (
        <div className={styles.container} onClick={onClickAsset}>
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
                <Icons.Outlined.Asset />
                <span>{name}</span>
            </div>
        </div>
    )
}
