import { Separator } from '../../../../../components/Separator'
import { ComponentImage } from './components/ComponentImage'
import { ComponentInfoLabel } from './components/ComponentInfoLabel'
import { ComponentName } from './components/ComponentName'
import styles from './styles.module.scss'

type CompomentProps = {
    name: string
    gatewayId: string
    sensorId: string
    isCritical: boolean
    sensorLabel: string
}

export type ComponentContentProps = {
    component: CompomentProps | null
}

export function ComponentContent({ component }: ComponentContentProps) {
    if (!component) {
        // TODO implement empty state
        return <div className={styles.container}></div>
    }

    return (
        <div className={styles.container}>
            <ComponentName title={component.name} />
            <div className={styles['data-container']}>
                <div className={styles['general-data-container']}>
                    <ComponentImage />

                    <div className={styles['general-data']}>
                        <ComponentInfoLabel
                            type="component-name"
                            label={component.name}
                        />
                        <Separator />
                        <ComponentInfoLabel
                            type="accountable"
                            label={component.sensorLabel}
                        />
                    </div>
                </div>

                <Separator />

                <div className={styles['type-data']}>
                    <div>
                        <ComponentInfoLabel
                            type="sensor"
                            label={component.sensorId}
                        />
                    </div>
                    <div>
                        <ComponentInfoLabel
                            type="receptor"
                            label={component.gatewayId}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
