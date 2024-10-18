import { MdOutlineRouter, MdOutlineWifiTethering } from 'react-icons/md'
import styles from './styles.module.scss'

type ComponentInfoLabelProps = {
    label: string
    type?: 'component-name' | 'accountable' | 'sensor' | 'receptor'
}

export function ComponentInfoLabel({
    label,
    type = 'component-name',
}: ComponentInfoLabelProps) {
    const firsLetter = label[0]

    if (type === 'accountable') {
        return (
            <div className={styles.container}>
                <h5 className={styles.title}>{'Responsáveis'}</h5>
                <span className={styles.label}>
                    <span className={styles['accountable-icon']}>
                        {firsLetter}
                    </span>
                    {label}
                </span>
            </div>
        )
    }

    if (type === 'sensor') {
        return (
            <div className={styles.container}>
                <h5 className={styles.title}>{'Sensor'}</h5>
                <span className={styles.label}>
                    <MdOutlineWifiTethering size={20} />
                    {label}
                </span>
            </div>
        )
    }

    if (type === 'receptor') {
        return (
            <div className={styles.container}>
                <h5 className={styles.title}>{'Receptor'}</h5>
                <span className={styles.label}>
                    <MdOutlineRouter size={20} />
                    {label}
                </span>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <h5 className={styles.title}>{'Tipo de Equipamento'}</h5>
            <span className={styles.label}>{label}</span>
        </div>
    )
}
