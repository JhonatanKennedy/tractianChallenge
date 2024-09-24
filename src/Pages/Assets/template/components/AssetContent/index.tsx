import { Separator } from '../../../../../components/Separator'
import { AssetImage } from './components/AssetImage'
import { AssetInfoLabel } from './components/AssetInfoLabel'
import { AssetName } from './components/AssetName'
import styles from './styles.module.scss'

type AssetProps = {
    name: string
    gatewayId: string
    sensorId: string
    isCritical: boolean
    sensorLabel: string
}

export type AssetContentProps = {
    asset: AssetProps | null
}

export function AssetContent({ asset }: AssetContentProps) {
    if (!asset) {
        // TODO implement empty state
        return <div className={styles.container}></div>
    }

    return (
        <div className={styles.container}>
            <AssetName title={asset.name} />
            <div className={styles['data-container']}>
                <div className={styles['general-data-container']}>
                    <AssetImage />

                    <div className={styles['general-data']}>
                        <AssetInfoLabel
                            type="component-name"
                            label={asset.name}
                        />
                        <Separator />
                        <AssetInfoLabel
                            type="accountable"
                            label={asset.sensorLabel}
                        />
                    </div>
                </div>

                <Separator />

                <div className={styles['type-data']}>
                    <div>
                        <AssetInfoLabel type="sensor" label={asset.sensorId} />
                    </div>
                    <div>
                        <AssetInfoLabel
                            type="receptor"
                            label={asset.gatewayId}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
