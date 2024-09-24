import { ComponentHashType, FormattedComponentType } from '../../IService'

export function _formatComponent(
    component: ComponentHashType,
): FormattedComponentType {
    const sensorLabel =
        component.sensorType === 'energy' ? 'Elétrica' : 'Mecânica'

    const isCritical = component.status === 'alert'

    return {
        sensorId: component.sensorId,
        gatewayId: component.gatewayId,
        name: component.name,
        isCritical,
        sensorLabel,
    }
}
