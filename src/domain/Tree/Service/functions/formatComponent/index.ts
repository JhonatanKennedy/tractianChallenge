import { FormattedComponentType, TreeNodeType } from '../../IService'

export function _formatComponent(
    hash: TreeNodeType,
): FormattedComponentType | null {
    if (hash.type !== 'component') return null

    const sensorLabel = hash.sensorType === 'energy' ? 'Elétrica' : 'Mecânica'

    const isCritical = hash.status === 'alert'

    return {
        sensorId: hash.sensorId,
        gatewayId: hash.gatewayId,
        name: hash.name,
        isCritical,
        sensorLabel,
    }
}
