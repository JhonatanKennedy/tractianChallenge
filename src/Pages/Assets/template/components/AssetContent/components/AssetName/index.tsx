import styles from './styles.module.scss'

type AssetName = {
    title: string
}

export function AssetName({ title }: AssetName) {
    return (
        <div className={styles.container}>
            <h3>{title}</h3>
        </div>
    )
}
