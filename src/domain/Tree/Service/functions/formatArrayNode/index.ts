import { NodeType } from '../../../../../type/nodeType'
import { FormatArrayNodeAttrs, TreeNodeType } from '../../IService'

export function _formatArrayNode(attrs: FormatArrayNodeAttrs): TreeNodeType[] {
    const arrayNode = []

    for (const location of attrs.locations) {
        const node = {
            ...location,
            type: NodeType.LOCATION,
            children: [],
            isCritical: false,
            isEnergy: false,
        } as TreeNodeType

        arrayNode.push(node)
    }

    for (const asset of attrs.assets) {
        const type = !asset.sensorType ? NodeType.ASSET : NodeType.COMPONENT
        const node = {
            ...asset,
            type,
            children: [],
            isCritical: asset.status === 'alert',
            isEnergy: asset.sensorType === 'energy',
        } as TreeNodeType

        arrayNode.push(node)
    }

    return arrayNode
}
