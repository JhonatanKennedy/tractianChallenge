import { Separator } from '../../../../../components/Separator'
import { AssetImage } from './components/AssetImage'
import { AssetInfoLabel } from './components/AssetInfoLabel'
import { AssetName } from './components/AssetName'
import styles from './styles.module.scss'

export type AssetContentProps = {
    assetName: string
    componentName: string
    sensorId: string
    gatwayId: string
    //TODO this will be changed to be accordinly with sensortype enums
    sensorType: string
}

export function AssetContent({
    assetName,
    componentName,
    sensorId,
    gatwayId,
    sensorType,
}: AssetContentProps) {
    return (
        <div className={styles.container}>
            <AssetName title={assetName} />
            <div className={styles['data-container']}>
                <div className={styles['general-data-container']}>
                    <AssetImage />

                    <div className={styles['general-data']}>
                        <AssetInfoLabel
                            type="component-name"
                            label={componentName}
                        />

                        <Separator />

                        <AssetInfoLabel type="accountable" label={sensorType} />
                    </div>
                </div>

                <Separator />

                <div className={styles['type-data']}>
                    <div>
                        <AssetInfoLabel type="sensor" label={sensorId} />
                    </div>
                    <div>
                        <AssetInfoLabel type="receptor" label={gatwayId} />
                    </div>
                </div>
            </div>
        </div>
    )
}
